using DotNetEnv;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Octokit;
using onboardor.Components.dashboard;
using onboardor.Components.shared;
using Onboardor.Components.graphQl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class AddOnboardingStepPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly IPipelineService _pipelineService;
        private readonly IMemberService _memberService;
        private GitHubClient _client = new GitHubClient(new ProductHeaderValue(Env.GetString("APP_NAME")));

        public AddOnboardingStepPayload(
            IPipelineService pipelineService,
            IMemberService memberService)
        {
            _pipelineService = pipelineService;
            _memberService = memberService;

            Name = nameof(AddOnboardingStepPayload);

            Field<NonNullGraphType<OnboardingPipelinePayload>>("pipeline");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var pipelineId = inputs.Get<int>("pipelineId");
            var memberId = inputs.Get<int?>("memberId");
            var organizationName = inputs.Get<string>("organizationName");
            var name = inputs.Get<string>("name");
            var pipeline = _pipelineService.GetPipeline(pipelineId);
            var userContext = context.UserContext.As<Context>();
            var token = userContext.HttpContext.Session.GetString("OAuthToken");

            if (token == null) throw new NullReferenceException("OAuthToken is null");

            _client.Credentials = new Credentials(token);

            var newIssue = new NewIssue(name);

            if (memberId.HasValue)
            {
                var member = _memberService.GetMember(memberId.Value);

                newIssue.Assignees.Add(member.Name);
            }
       
            var issue = await _client.Issue.Create(organizationName, Constants.RepositoryName, newIssue);

            pipeline.OnboardingSteps.Add(new OnboardingStep
            {
                Id = issue.Id,
                Name = name,
                IssueNumber = issue.Number
            });

            _pipelineService.Update(pipeline);

            return new {
                pipeline
            };
        }
    }
}
