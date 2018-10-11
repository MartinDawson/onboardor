using DotNetEnv;
using GraphQL.Relay.Types;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.Extensions.Configuration;
using onboardor.Components.dashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class AddOnboardingProcessPayload : MutationPayloadGraphType
    {
        private readonly IOnboardingProcessService _processService;
        private readonly IOrganizationService _organizationService;
        private readonly IPipelineService _pipelineService;

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

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var organizationId = inputs.Get<int>("organizationId");
            var name = inputs.Get<string>("name");
            var pipelineIds = inputs.Get("pipelineIds", new object[0]).Cast<int>().ToList();
            var organization = _organizationService.GetOrganization(organizationId);
            var pipelines = _pipelineService.GetPipelines().Where(x => pipelineIds.Any(z => z == x.Id)).ToList();

            var process = new OnboardingProcess
            {
                Name = name,
                Organization = organization,
                OnboardingPipelines = pipelines.Select(pipeline => new OnboardingPipeline {
                    Name = pipeline.Name,
                    OnboardingSteps = pipeline.OnboardingSteps.Select(step => new OnboardingStep {
                        IsClosed = step.IsClosed,
                        IssueNumber = step.IssueNumber,
                        Name = step.Name
                    }).ToList(),
                    Organization = pipeline.Organization
                }).ToList()
            };

            _processService.Add(process);

            return new {
                organization
            };
        }
    }
}
