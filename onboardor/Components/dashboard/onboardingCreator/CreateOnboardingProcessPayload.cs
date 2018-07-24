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

namespace onboardor.Components.dashboard.onBoardingCreator
{
    public class CreateOnboardingProcessPayload : MutationPayloadGraphType
    {
        private readonly IOrganizationService _organizationService;

        public CreateOnboardingProcessPayload(IOrganizationService organizationService)
        {
            _organizationService = organizationService;

            Name = nameof(CreateOnboardingProcessPayload);
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var organizationId = inputs.Get<int>("organizationId");
            var steps = inputs.Get("steps", new object[0]).Cast<string>().ToList();

            var organization = _organizationService.GetOrganization(organizationId);

            foreach (var step in steps)
            {
                organization.OnboardingSteps.Add(new OnboardingStep { Step = step });
            }

            _organizationService.Update(organization);

            return organization;
        }
    }
}
