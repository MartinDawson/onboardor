using DotNetEnv;
using GraphQL.Relay.Types;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.Extensions.Configuration;
using Octokit;
using onboardor.Components.dashboard;
using onboardor.Components.shared;
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
            var existingIssue = await _client.Issue.Get(organization.Name, Constants.RepositoryName, step.Id);

            var newIssue = new NewIssue(step.Name)
            {
                Body = existingIssue.Body,
            };

            newIssue.Assignees.Add(member.Name);

            var issue = await _client.Issue.Create(
                member.OnboardingProcess.Organization.Name,
                Constants.RepositoryName,
                newIssue);

            return new OnboardingStep
            {
                Id = issue.Id,
                IsClosed = step.IsClosed,
                IssueNumber = step.IssueNumber,
                Name = step.Name,
                OnboardingPipeline = step.OnboardingPipeline,
            };
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var memberId = inputs.Get<int>("memberId");
            var processId = inputs.Get<int>("processId");
            var member = _memberService.GetMember(memberId);

            member.OnboardingProcess = _processService.GetProcess(processId);
            var newPipelines = new List<OnboardingPipeline>();

            foreach (var pipeline in member.OnboardingProcess.OnboardingPipelines)
            {
                var newOnboardingSteps = new List<OnboardingStep>();

                foreach (var step in pipeline.OnboardingSteps)
                {
                    var newStep = await GetOnboardingStep(member.OnboardingProcess.Organization, member, step);

                    newOnboardingSteps.Add(step);
                }
                
                newPipelines.Add(new OnboardingPipeline
                {
                    Name = pipeline.Name,
                    OnboardingSteps = newOnboardingSteps,
                    Organization = pipeline.Organization,
                });
            }

            _memberService.Update(member);

            return new {
                member,
            };
        }
    }
}
