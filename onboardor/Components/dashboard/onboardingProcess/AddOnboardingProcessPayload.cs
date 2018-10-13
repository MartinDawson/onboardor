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
    public class AddOnboardingProcessPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly IOnboardingProcessService _processService;
        private readonly IOrganizationService _organizationService;
        private readonly IPipelineService _pipelineService;
        private GitHubClient _client = new GitHubClient(new ProductHeaderValue(Env.GetString("APP_NAME")));

        public AddOnboardingProcessPayload(
            IOnboardingProcessService processService,
            IOrganizationService organizationService,
            IPipelineService pipelineService)
        {
            _processService = processService;
            _organizationService = organizationService;
            _pipelineService = pipelineService;

            Name = nameof(AddOnboardingProcessPayload);

            Field<NonNullGraphType<OrganizationPayload>>("organization");
        }

        private async Task<OnboardingStep> GetOnboardingStep(Organization organization, OnboardingStep step)
        {
            var existingIssue = await _client.Issue.Get(organization.Name, Constants.RepositoryName, step.IssueNumber);

            var newIssue = new NewIssue(step.Name)
            {
                Body = existingIssue.Body,
            };

            var issue = await _client.Issue.Create(
                organization.Name,
                Constants.RepositoryName,
                newIssue);

            return new OnboardingStep
            {
                Id = issue.Id,
                IsClosed = step.IsClosed,
                IssueNumber = issue.Number,
                Name = issue.Title,
                OnboardingPipeline = step.OnboardingPipeline,
            };
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var organizationId = inputs.Get<int>("organizationId");
            var name = inputs.Get<string>("name");
            var pipelineIds = inputs.Get("pipelineIds", new object[0]).Cast<int>().ToList();
            var organization = _organizationService.GetOrganization(organizationId);
            var pipelines = _pipelineService.GetPipelines().Where(x => pipelineIds.Any(z => z == x.Id)).ToList();
            var userContext = context.UserContext.As<Context>();
            var newPipelines = new List<OnboardingPipeline>();
            var token = userContext.HttpContext.Session.GetString("OAuthToken");

            if (token == null) throw new NullReferenceException("OAuthToken is null");

            _client.Credentials = new Credentials(token);

            foreach (var pipeline in pipelines)
            {
                var newOnboardingSteps = new List<OnboardingStep>();

                foreach (var step in pipeline.OnboardingSteps)
                {
                    var newStep = await GetOnboardingStep(organization, step);

                    newOnboardingSteps.Add(newStep);
                }

                newPipelines.Add(new OnboardingPipeline
                {
                    Name = pipeline.Name,
                    OnboardingSteps = newOnboardingSteps,
                    Organization = pipeline.Organization,
                });
            }
            var process = new OnboardingProcess
            {
                Name = name,
                Organization = organization,
                OnboardingPipelines = newPipelines
            };

            _processService.Add(process);

            return new {
                organization
            };
        }
    }
}
