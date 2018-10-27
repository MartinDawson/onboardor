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

namespace onboardor.Components.dashboard.onBoardingCreator
{
    public class AddOnboardingProcessToMemberPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly IOnboardingProcessService _processService;
        private readonly IMemberService _memberService;
        private GitHubClient _client = new GitHubClient(new ProductHeaderValue(Env.GetString("APP_NAME")));

        public AddOnboardingProcessToMemberPayload(
            IOnboardingProcessService processService,
            IMemberService memberService)
        {
            _processService = processService;
            _memberService = memberService;

            Name = nameof(AddOnboardingProcessToMemberPayload);

            Field<NonNullGraphType<MemberPayload>>("member");
        }

        private async Task<OnboardingStep> GetOnboardingStep(Organization organization, Member member, OnboardingStep step)
        {
            var existingIssue = await _client.Issue.Get(organization.Name, Constants.RepositoryName, step.IssueNumber);

            var newIssue = new NewIssue(step.Name)
            {
                Body = existingIssue.Body,
            };

            newIssue.Assignees.Add(member.Name);

            var issue = await _client.Issue.Create(
                organization.Name,
                Constants.RepositoryName,
                newIssue);

            return new OnboardingStep
            {
                Id = issue.Id,
                IsClosed = step.IsClosed,
                IssueNumber = issue.Number,
                Name = step.Name,
                OnboardingPipeline = step.OnboardingPipeline,
            };
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var memberId = inputs.Get<int>("memberId");
            var processId = inputs.Get<int>("processId");
            var member = _memberService.GetMember(memberId);
            var userContext = context.UserContext.As<Context>();
            var newPipelines = new List<OnboardingPipeline>();
            var token = userContext.HttpContext.Session.GetString("OAuthToken");

            if (token == null) throw new NullReferenceException("OAuthToken is null");

            _client.Credentials = new Credentials(token);

            var process = _processService.GetProcess(processId);

            foreach (var pipeline in process.OnboardingPipelines)
            {
                var newOnboardingSteps = new List<OnboardingStep>();

                foreach (var step in pipeline.OnboardingSteps)
                {
                    var newStep = await GetOnboardingStep(process.Organization, member, step);

                    newOnboardingSteps.Add(newStep);
                }
                
                newPipelines.Add(new OnboardingPipeline
                {
                    Name = pipeline.Name,
                    OnboardingSteps = newOnboardingSteps,
                });
            }

            member.OnboardingProcesses.Add(new OnboardingProcess
            {
                Name = process.Name,
                OnboardingPipelines = newPipelines,
                Organization = process.Organization
            });

            _memberService.Update(member);

            return new {
                member,
            };
        }
    }
}
