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
using Octokit;
using DotNetEnv;
using Microsoft.AspNetCore.Hosting;
using onboardor.Components.dashboard;
using Organization = onboardor.Components.dashboard.Organization;

namespace Onboardor.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
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
                    var client = new GitHubClient(new ProductHeaderValue(Env.GetString("APP_NAME")));
                    var path = $"{_env.WebRootPath}/{Env.GetString("APP_NAME")}.pem";
                    var appIntegrationId = Env.GetInt("GITHUB_APP_ID");
                    var generator = new GitHubJwt.GitHubJwtFactory(
                        new GitHubJwt.FilePrivateKeySource(path),
                        new GitHubJwt.GitHubJwtFactoryOptions
                        {
                            AppIntegrationId = appIntegrationId,
                            ExpirationSeconds = 600
                        });

                    var jwtToken = generator.CreateEncodedJwtToken();

                    client.Credentials = new Credentials(jwtToken, AuthenticationType.Bearer);

                    var installations = await client.GitHubApps.GetAllInstallationsForCurrent();

                    var organizations = new List<Organization>();

                    foreach (var installation in installations)
                    {
                        var response = await client.GitHubApps.CreateInstallationToken(installation.Id);
                        var installationClient = new GitHubClient(new ProductHeaderValue($"{Env.GetString("APP_NAME")}-${installation.Id}"))
                        {
                            Credentials = new Credentials(response.Token)
                        };

                        organizations.Add(_organizationService.GetOrganization((int)installation.TargetId));
                    }

                    return organizations;
                });

            Field<NonNullGraphType<BooleanGraphType>>()
                .Argument<NonNullGraphType<IntGraphType>>("installationId", "The installationId for the app")
                .Name("setup")
                .ResolveAsync(async c =>
                {
                    var client = new GitHubClient(new ProductHeaderValue(Env.GetString("APP_NAME")));
                    var path = $"{_env.WebRootPath}/{Env.GetString("APP_NAME")}.pem";
                    var appIntegrationId = Env.GetInt("GITHUB_APP_ID");
                    var generator = new GitHubJwt.GitHubJwtFactory(
                        new GitHubJwt.FilePrivateKeySource(path),
                        new GitHubJwt.GitHubJwtFactoryOptions
                        {
                            AppIntegrationId = appIntegrationId,
                            ExpirationSeconds = 600
                        });

                    var jwtToken = generator.CreateEncodedJwtToken();
                    client.Credentials = new Credentials(jwtToken, AuthenticationType.Bearer);

                    var installationId = c.GetArgument<int>("installationId");
                    var installation = await client.GitHubApps.GetInstallation(installationId);
                    var response = await client.GitHubApps.CreateInstallationToken(installation.Id);
                    var installationClient = new GitHubClient(new ProductHeaderValue($"{Env.GetString("APP_NAME")}-${installation.Id}"))
                    {
                        Credentials = new Credentials(response.Token)
                    };

                    Octokit.Organization organization;

                    if (installation.TargetType == AccountType.Organization)
                    {
                        organization = await installationClient.Organization.Get(installation.Account.Login);

                        var members = await installationClient.Organization.Member.GetAll(organization.Login);

                        var mappedOrganization = new Organization
                        {
                            Id = organization.Id,
                            Name = organization.Login,
                            AvatarUrl = organization.AvatarUrl,
                            Members = members.Select(x => new Member
                            {
                                Id = x.Id,
                                Name = x.Login,
                                AvatarUrl = x.AvatarUrl,
                            }).ToList(),
                        };

                        _organizationService.Add(mappedOrganization);
                    }

                    return true;
                });
        }
    }
}
