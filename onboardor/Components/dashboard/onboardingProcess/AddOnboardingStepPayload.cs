using DotNetEnv;
using GraphQL.Relay.Types;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.Extensions.Configuration;
using Octokit;
using onboardor.Components.dashboard;
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
        private GitHubClient _client = new GitHubClient(new ProductHeaderValue(Env.GetString("APP_NAME")));

        public AddOnboardingStepPayload(IPipelineService pipelineService)
        {
            _pipelineService = pipelineService;

            Name = nameof(AddOnboardingStepPayload);

            Field<NonNullGraphType<OnboardingPipelinePayload>>("pipeline");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var pipelineId = inputs.Get<int>("pipelineId");
            var repositoryId = inputs.Get<int>("repositoryId");
            var name = inputs.Get<string>("name");
            var description = inputs.Get<string>("description");
            var pipeline = _pipelineService.GetPipeline(pipelineId);

            var p = await _client.Repository.Get(repositoryId);

            //var label = await _client.Issue.Labels.Create(repositoryId, new NewLabel("onboarding", "43cea2")
            //{
            //    Description = "Onboardor.com generated"
            //});

            //var newIssue = new NewIssue(name)
            //{
            //    Body = description,
            //};

            //  newIssue.Labels.Add(label.Name);
            var newIssue = new NewIssue("test");

            var issue = await _client.Issue.Create(136980719, newIssue);

            //var issue = await _client.Issue.Create(p.Id, newIssue);

            pipeline.OnboardingSteps.Add(new OnboardingStep
            {
                Name = name,
                Description = description,
                IssueId = issue.Id
            });

            _pipelineService.Update(pipeline);

            return new {
                pipeline
            };
        }
    }
}
