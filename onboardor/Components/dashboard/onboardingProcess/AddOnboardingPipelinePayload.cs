﻿using DotNetEnv;
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

        public AddOnboardingPipelinePayload(IOrganizationService organizationService)
        {
            _organizationService = organizationService;

            Name = nameof(AddOnboardingPipelinePayload);

            Field<NonNullGraphType<OrganizationPayload>>("organization");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var organizationId = inputs.Get<int>("organizationId");
            var name = inputs.Get<string>("name");
            var organization = _organizationService.GetOrganization(organizationId);

            organization.OnboardingPipelines.Add(new OnboardingPipeline
            {
                Name = name,
            });

            _organizationService.Update(organization);

            return new {
                organization
            };
        }
    }
}