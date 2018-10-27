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
    public class AddOnboardingPipelinePayload : MutationPayloadGraphType
    {
        private readonly IOrganizationService _organizationService;
        private readonly IMemberService _memberService;
        private readonly IOnboardingProcessService _processService;

        public AddOnboardingPipelinePayload(
            IOrganizationService organizationService,
            IMemberService memberService,
            IOnboardingProcessService processService)
        {
            _organizationService = organizationService;
            _memberService = memberService;
            _processService = processService;

            Name = nameof(AddOnboardingPipelinePayload);

            Field<NonNullGraphType<OrganizationPayload>>("organization");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var organizationId = inputs.Get<int>("organizationId");
            var processId = inputs.Get<int?>("processId");
            var name = inputs.Get<string>("name");
            var organization = _organizationService.GetOrganization(organizationId);
            var pipeline = new OnboardingPipeline
            {
                Name = name,
            };

            if (processId.HasValue)
            {
                var process = _processService.GetProcess(processId.Value);

                pipeline.OnboardingProcess = process;
            }

            organization.OnboardingPipelines.Add(pipeline);

            _organizationService.Update(organization);

            return new
            {
                organization,
            };
        }
    }
}
