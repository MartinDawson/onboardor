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

namespace Onboardor.Components.GraphQl
{
    public class AppQuery : GraphQL.Relay.Types.Temp.QueryGraphType
    {
        private Octokit.GitHubClient _client = new Octokit.GitHubClient(new Octokit.ProductHeaderValue(Env.GetString("APP_NAME")));

        private readonly IOrganizationService _organizationService;
        private readonly IHostingEnvironment _env;

        public AppQuery(ILoggerFactory loggerFactory, IHostingEnvironment env, 
            IOrganizationService organizationService)
        {
            _env = env;
            _organizationService = organizationService;

            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<NonNullGraphType<ListGraphType<OrganizationPayload>>>()
                .Name("organizations")
                .ResolveAsync(async c =>
                {
                    var user = await _client.User.Current();
                    var organizations = _organizationService.GetOrganizations(user.Id);

                    return organizations;
                });

            Field<StringGraphType>()
                .Description("Returns the url for the OAUTH request or null if the user already authorized")
                .Argument<StringGraphType>("redirectUrl", "The absolute url to redirect to")
                .Name("setup")
                .ResolveAsync(async c =>
                {
                    try
                    {
                        var user = await _client.User.Current();

                        return null;
                    }
                    catch (Exception)
                    {
                        var context = c.UserContext.As<Context>();
                        var csrf = Password.Generate(24, 1);

                        context.HttpContext.Session.SetString("CSRF", csrf);

                        var request = new Octokit.OauthLoginRequest(Env.GetString("CLIENT_ID"))
                        {
                            Scopes = { "repo", "user", "admin:org", "admin:public_key",
                                "admin:repo_hook", "notifications", "admin:org_hook",
                                "gist", "delete_repo", "write:discussion", "admin:gpg_key" },
                            State = csrf,
                        };
                        var redirectUri = c.GetArgument<string>("redirectUrl");

                        if (redirectUri != null)
                        {
                            request.RedirectUri = new Uri($"{Env.GetString("APP_URL")}/setupCallback?redirectUrl={redirectUri}");
                        }

                        var oAuthLoginUrl = _client.Oauth.GetGitHubLoginUrl(request);

                        return oAuthLoginUrl;
                    }
                });

            Field<NonNullGraphType<BooleanGraphType>>()
                .Argument<NonNullGraphType<StringGraphType>>("code", "The code for the setup")
                .Argument<NonNullGraphType<StringGraphType>>("state", "The CSRF protection state")
                .Name("setupCallback")
                .ResolveAsync(async c =>
                {
                    var context = c.UserContext.As<Context>();
                    var expectedState = context.HttpContext.Session.GetString("CSRF");
                    var state = c.GetArgument<string>("state");
                    var code = c.GetArgument<string>("code");

                    if (state != expectedState) throw new InvalidOperationException("Security fail");

                    context.HttpContext.Session.SetString("CSRF", "");
                    var request = new Octokit.OauthTokenRequest(Env.GetString("CLIENT_ID"), Env.GetString("CLIENT_SECRET"), code);
                    var token = await _client.Oauth.CreateAccessToken(request);
                    _client.Credentials = new Octokit.Credentials(token.AccessToken);

                    var organizations = await _client.Organization.GetAllForCurrent();

                    var mappedOrganizations = organizations.Select(x => new Organization
                    {
                        Id = x.Id,
                        Name = x.Login,
                        AvatarUrl = x.AvatarUrl,
                    }).ToList();

                    foreach (var organization in mappedOrganizations)
                    {
                        var members = await _client.Organization.Member.GetAll(organization.Name);

                        organization.Members = members.Select(x => new OrganizationMember
                        {
                           Member = new Member
                           {
                               Id = x.Id,
                               Name = x.Login,
                               AvatarUrl = x.AvatarUrl,
                               CreatedAt = x.CreatedAt
                           },
                           Organization = organization
                        }).ToList();
                    }

                    foreach (var organization in mappedOrganizations)
                    {
                        try
                        {
                            _organizationService.Add(organization);
                        }
                        catch (DbUpdateException) {}
                    }

                    return true;
                });
        }
    }
}
