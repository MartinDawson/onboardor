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
    public class AddOnboardingStepPayload : MutationPayloadGraphType
    {
        private readonly IPipelineService _pipelineService;

        public AddOnboardingStepPayload(IPipelineService pipelineService)
        {
            _pipelineService = pipelineService;

            Name = nameof(AddOnboardingStepPayload);

            Field<NonNullGraphType<OnboardingPipelinePayload>>("pipeline");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var pipelineId = inputs.Get<int>("pipelineId");
            var name = inputs.Get<string>("name");
            var description = inputs.Get<string>("description");
            var pipeline = _pipelineService.GetPipeline(pipelineId);

            pipeline.OnboardingSteps.Add(new OnboardingStep
            {
                Name = name,
                Description = description
            });

            _pipelineService.Update(pipeline);

            return new {
                pipeline
            };
        }
    }
}
