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
    public class RemoveOnboardingPipelinePayload : MutationPayloadGraphType
    {
        private readonly IPipelineService _pipelineService;

        public RemoveOnboardingPipelinePayload(IPipelineService pipelineService)
        {
            _pipelineService = pipelineService;

            Name = nameof(RemoveOnboardingPipelinePayload);

            Field<NonNullGraphType<OrganizationPayload>>("organization");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var id = inputs.Get<int>("id");
            var pipeline = _pipelineService.GetPipeline(id);
            var organization = pipeline.Organization;

            _pipelineService.Remove(pipeline);

            return new {
                organization
            };
        }
    }
}
