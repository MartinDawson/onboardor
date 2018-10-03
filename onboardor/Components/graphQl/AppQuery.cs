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

            Field<NonNullGraphType<ListGraphType<OrganizationPayload>>>()
                .Name("organizations")
                .ResolveAsync(async c =>
                {
               //     var context = c.UserContext.As<Context>();
              //      var token = context.HttpContext.Session.GetString("OAuthToken");

                  //  if (token == null) throw new NullReferenceException("OAuthToken is null");

                 //   _client.Credentials = new Credentials(token);

                    var user = await _client.User.Current();
                    var organizations = _organizationService.GetOrganizations(user.Id);

                    return organizations;
                });

            Field<NonNullGraphType<StringGraphType>>()
                .Argument<NonNullGraphType<StringGraphType>>("code", "The code for the setup")
                .Argument<NonNullGraphType<StringGraphType>>("state", "The CSRF protection state")
                .Name("setupCallback")
                .ResolveAsync(async c =>
                {
                    var context = c.UserContext.As<Context>();
                    var expectedState = context.HttpContext.Session.GetString("CSRF");
                    var state = c.GetArgument<string>("state");
                    var code = c.GetArgument<string>("code");

                    if (state != expectedState) throw new InvalidOperationException();

                    context.HttpContext.Session.SetString("CSRF", "");
                    var request = new OauthTokenRequest(Env.GetString("CLIENT_ID"), Env.GetString("CLIENT_SECRET"), code);
                    var token = await _client.Oauth.CreateAccessToken(request);

                    _client.Credentials = new Credentials(token.AccessToken);

                    var organizations = await _client.Organization.GetAllForCurrent();

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

                            _organizationService.Add(organization);
                        }
                    }

                    return token.AccessToken;
                });
        }
    }
}
