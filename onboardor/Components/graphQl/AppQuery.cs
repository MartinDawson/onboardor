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
using Octokit.GraphQL;
using static Octokit.GraphQL.Variable;
using Onboardor.Components.graphQl;
using Microsoft.AspNetCore.Http;
using onboardor.Components.shared.utilities;
using Octokit.GraphQL.Model;
using onboardor.Components.graphQl;

namespace Onboardor.Components.GraphQl
{
    public class AppQuery : GraphQL.Relay.Types.Temp.QueryGraphType
    {
        private Octokit.GitHubClient _client = new Octokit.GitHubClient(new Octokit.ProductHeaderValue(Env.GetString("APP_NAME")));

        private readonly IOrganizationService _organizationService;
        private readonly IHostingEnvironment _env;
        private readonly IConnectionFactory _connectionFactory;

        public AppQuery(ILoggerFactory loggerFactory, IHostingEnvironment env, 
            IOrganizationService organizationService, IConnectionFactory connectionFactory)
        {
            _env = env;
            _organizationService = organizationService;
            _connectionFactory = connectionFactory;

            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<NonNullGraphType<ListGraphType<OrganizationPayload>>>()
                .Name("organizations")
                .ResolveAsync(async c =>
                {
                    var user = await _client.User.Current();
                    var organizations = _organizationService.GetOrganizations(user.Id);

                    return organizations;
                });

            Field<NonNullGraphType<StringGraphType>>()
                .Description("Returns the url for the OAUTH request")
                .Name("setup")
                .Resolve(c =>
                {
                    var context = c.UserContext.As<Context>();
                    var csrf = Password.Generate(24, 1);

                    context.HttpContext.Session.SetString("CSRF", csrf);

                    var request = new Octokit.OauthLoginRequest(Env.GetString("CLIENT_ID"))
                    {
                        Scopes = { "repo", "user", "admin:org", "admin:public_key",
                            "admin:repo_hook", "notifications", "admin:org_hook",
                            "gist", "delete_repo", "write:discussion", "admin:gpg_key"  },
                        State = csrf
                    };

                    var oAuthLoginUrl = _client.Oauth.GetGitHubLoginUrl(request);

                    return oAuthLoginUrl;
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
                    var appName = Env.GetString("APP_NAME");
                    var productInformation = new ProductHeaderValue(appName);

                    _connectionFactory.CreateConnection(new Connection(productInformation, token.AccessToken));
                    
                    //var query = new Query()
                    //    .Viewer
                    //    .Organization("SoundVast").Select(o => new Organization
                    //    {
                    //        Id = o.DatabaseId.Value,
                    //        Name = o.Name,
                    //        AvatarUrl = o.AvatarUrl(null),
                    //        Members = o.Members(10, null, null, null).Nodes.Select(m => new OrganizationMember
                    //        {
                    //            Member = new Member
                    //            {
                    //                Id = m.DatabaseId.Value,
                    //                Name = m.Name,
                    //                AvatarUrl = m.AvatarUrl(null),
                    //                CreatedAt = m.CreatedAt,
                    //                Issues = m.Issues(10, null, null, null, null, null, null).Nodes.Select(i => new onboardor.Components.dashboard.Issue
                    //                {
                    //                    Id = i.DatabaseId.Value,
                    //                }).ToList()
                    //            }
                    //        }).ToList()
                    //    }).Compile();

                    //var organization = await _connectionFactory.Connection.Run(query);

                    //_organizationService.Add(organization);

                    return true;
                });
        }
    }
}
