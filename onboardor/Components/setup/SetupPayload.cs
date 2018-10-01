using DotNetEnv;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using onboardor.Components.dashboard;
using onboardor.Components.shared.utilities;
using Onboardor.Components.graphQl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace onboardor.Components.setup
{
    public class SetupPayload : MutationPayloadGraphType
    {
        private Octokit.GitHubClient _client = new Octokit.GitHubClient(new Octokit.ProductHeaderValue(Env.GetString("APP_NAME")));
        private ILogger<SetupPayload> _logger;

        public SetupPayload(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<SetupPayload>();

            Name = nameof(SetupPayload);

            Field<NonNullGraphType<StringGraphType>>("oAuthLoginUrl");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var c = context.UserContext.As<Context>();
            var csrf = Password.Generate(24, 1);

            c.HttpContext.Session.SetString("CSRF", csrf);

            var request = new Octokit.OauthLoginRequest(Env.GetString("CLIENT_ID"))
            {
                Scopes = { "repo" },
                State = csrf,
            };
            var redirectUri = inputs.Get<string>("redirectUrl");

            _logger.Log(LogLevel.Debug, $"csrf set: {csrf}");

            if (redirectUri != null)
            {
                request.RedirectUri = new Uri($"{Env.GetString("APP_URL")}/setupCallback?redirectUrl={redirectUri}");
            }

            var oAuthLoginUrl = _client.Oauth.GetGitHubLoginUrl(request);

            return new {
                oAuthLoginUrl
            };
        }
    }
}
