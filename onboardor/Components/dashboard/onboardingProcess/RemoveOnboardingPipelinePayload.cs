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
    public class RemoveOnboardingPipelinePayload : MutationPayloadGraphType
    {
        private readonly IOrganizationService _organizationService;

        public RemoveOnboardingPipelinePayload(IOrganizationService organizationService)
        {
            _organizationService = organizationService;

            Name = nameof(RemoveOnboardingPipelinePayload);

            Field<NonNullGraphType<OrganizationPayload>>("organization");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var organizationId = inputs.Get<int>("organizationId");
            var id = inputs.Get<int>("id");
            var organization = _organizationService.GetOrganization(organizationId);
            var pipelineToRemove = organization.OnboardingPipelines.Single(x => x.Id == id);

            organization.OnboardingPipelines.Remove(pipelineToRemove);

            _organizationService.Update(organization);

            return new {
                organization
            };
        }
    }
}
