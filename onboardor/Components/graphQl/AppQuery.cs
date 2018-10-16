using GraphQL;
using GraphQL.Types;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using DotNetEnv;
using Microsoft.AspNetCore.Hosting;
using onboardor.Components.dashboard;
using Organization = onboardor.Components.dashboard.Organization;
using Onboardor.Components.graphQl;
using Microsoft.AspNetCore.Http;
using onboardor.Components.shared.utilities;
using Microsoft.EntityFrameworkCore;
using Octokit;
using onboardor.Components.shared;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.WebHooks;

namespace Onboardor.Components.GraphQl
{
    public class AppQuery : GraphQL.Relay.Types.Temp.QueryGraphType
    {
        private GitHubClient _client = new GitHubClient(new ProductHeaderValue(Env.GetString("APP_NAME")));

        private readonly IOrganizationService _organizationService;
        private readonly IMemberService _memberService;

        public AppQuery(ILoggerFactory loggerFactory,
            IOrganizationService organizationService,
            IMemberService memberService)
        {
            _organizationService = organizationService;
            _memberService = memberService;

            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<NonNullGraphType<StringGraphType>>()
                .Name("setup")
                .Argument<StringGraphType>("redirectUrl", "The redirect url")
                .Resolve(context =>
                {
                    var userContext = context.UserContext.As<Context>();
                    var csrf = Password.Generate(24, 1);
                    var redirectUrl = context.GetArgument<string>("redirectUrl");

                    userContext.HttpContext.Session.SetString("CSRF", csrf);

                    var request = new OauthLoginRequest(Env.GetString("CLIENT_ID"))
                    {
                        Scopes = { "repo" },
                        State = csrf,
                    };

                    if (redirectUrl != null)
                    {
                        request.RedirectUri = new Uri($"{Env.GetString("APP_URL")}/setupCallback?redirectUrl={redirectUrl}");
                    }

                    var oAuthLoginUrl = _client.Oauth.GetGitHubLoginUrl(request);

                    return oAuthLoginUrl;
                });

            Field<NonNullGraphType<ListGraphType<OrganizationPayload>>>()
                .Name("organizations")
                .ResolveAsync(async context =>
                {
                    var userContext = context.UserContext.As<Context>();
                    var token = userContext.HttpContext.Session.GetString("OAuthToken");

                    if (token == null) throw new NullReferenceException("OAuthToken is null");

                    _client.Credentials = new Credentials(token);

                    var user = await _client.User.Current();
                    var organizations = _organizationService.GetOrganizations(user.Id);

                    return organizations;
                });

            Field<NonNullGraphType<BooleanGraphType>>()
                .Argument<NonNullGraphType<StringGraphType>>("code", "The code for the setup")
                .Argument<NonNullGraphType<StringGraphType>>("state", "The CSRF protection state")
                .Name("setupCallback")
                .ResolveAsync(async context =>
                {
                    var userContext = context.UserContext.As<Context>();
                    var state = context.GetArgument<string>("state");
                    var code = context.GetArgument<string>("code");
                    var expectedState = userContext.HttpContext.Session.GetString("CSRF");

                    if (state != expectedState) throw new InvalidOperationException();

                    userContext.HttpContext.Session.SetString("CSRF", "");
                    var request = new OauthTokenRequest(Env.GetString("CLIENT_ID"), Env.GetString("CLIENT_SECRET"), code);
                    var token = await _client.Oauth.CreateAccessToken(request);

                    _client.Credentials = new Credentials(token.AccessToken);

                    userContext.HttpContext.Session.SetString("OAuthToken", token.AccessToken);

                    var organizations = await _client.Organization.GetAllForCurrent();

                    foreach (var organization in organizations)
                    {
                        var secretKey = Env.GetString("GITHUB_WEBHOOKS_SECRETKEY_DEFAULT");
                        var gitHubWebHookUrl = Env.GetString("GITHUB_WEBHOOK_URL", Env.GetString("APP_URL"));

                        var hooks = new Dictionary<string, string> {
                                { "url", $"{gitHubWebHookUrl}/api/webhooks/incoming/github" },
                                { "secret", secretKey },
                                { "content_type", "json" }
                            };

                        try
                        {
                            await _client.Repository.Create(organization.Login, new NewRepository(Constants.RepositoryName)
                            {
                                Description = "This repository is auto-generated by onboardor.com and is used for storing the issues. Do not delete.",
                            });
                        }
                        catch (RepositoryExistsException) { }

                        try
                        {
                            await _client.Repository.Hooks.Create(organization.Login, Constants.RepositoryName,
                                new NewRepositoryHook("web", hooks)
                                {
                                    Events = new List<string> { "issues" },
                                    Active = true
                                });
                        }
                        catch (ApiValidationException) { }
                    }

                    var mappedOrganizations = organizations.Select(x => new Organization
                    {
                        Id = x.Id,
                        Name = x.Login,
                        AvatarUrl = x.AvatarUrl,
                    }).ToList();

                    foreach (var organization in mappedOrganizations)
                    {
                        var existingOrganization = _organizationService.GetOrganization(organization.Id);

                        if (existingOrganization == null)
                        {
                            var members = await _client.Organization.Member.GetAll(organization.Name);

                            foreach (var member in members)
                            {
                                var existingMember = _memberService.GetMember(member.Id);

                                if (existingMember != null)
                                {
                                    organization.Members.Add(new OrganizationMember
                                    {
                                        Member = existingMember,
                                        Organization = organization
                                    });
                                } else {
                                    organization.Members.Add(new OrganizationMember
                                    {
                                        Member = new Member
                                        {
                                            Id = member.Id,
                                            Name = member.Login,
                                            AvatarUrl = member.AvatarUrl,
                                            CreatedAt = member.CreatedAt
                                        },
                                        Organization = organization
                                    });
                                }
                            }

                            _organizationService.Add(organization);
                        } else {
                            //var members = await _client.Organization.Member.GetAll(existingOrganization.Name);
                            //var membersToAdd = members.Where(x => existingOrganization.Members.All(z => z.Member.Id != x.Id));
                            //var membersToRemove = existingOrganization.Members.Where(x => members.All(z => z.Id != x.Member.Id)).Select(x => x.Member);

                            //foreach (var memberToAdd in membersToAdd)
                            //{
                            //    var member = new Member
                            //    {
                            //        Id = memberToAdd.Id,
                            //        Name = memberToAdd.Login,
                            //        AvatarUrl = memberToAdd.AvatarUrl,
                            //    };

                            //    member.Organizations = new List<OrganizationMember> {
                            //        new OrganizationMember { Member = member, Organization = existingOrganization }
                            //    };

                            //    _memberService.Add(member);
                            //}

                            //foreach (var memberToRemove in membersToRemove)
                            //{
                            //    _memberService.Remove(memberToRemove);
                            //}
                        }
                    }

                    return true;
                });
        }
    }
}
