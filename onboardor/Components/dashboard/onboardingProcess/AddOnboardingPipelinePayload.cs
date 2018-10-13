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

        public AddOnboardingPipelinePayload(
            IOrganizationService organizationService,
            IMemberService memberService)
        {
            _organizationService = organizationService;
            _memberService = memberService;

            Name = nameof(AddOnboardingPipelinePayload);

            Field<NonNullGraphType<OrganizationPayload>>("organization");
            Field<MemberPayload>("member");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var organizationId = inputs.Get<int>("organizationId");
            var memberId = inputs.Get<int?>("memberId");
            var name = inputs.Get<string>("name");
            var organization = _organizationService.GetOrganization(organizationId);
            var pipeline = new OnboardingPipeline
            {
                Name = name,
            };
            Member member = null;

            if (memberId.HasValue)
            {
                member = _memberService.GetMember(memberId.Value);

                pipeline.OnboardingProcess = member.OnboardingProcess;
            }

            organization.OnboardingPipelines.Add(pipeline);

            _organizationService.Update(organization);

            return new
            {
                organization,
                member,
            };
        }
    }
}
