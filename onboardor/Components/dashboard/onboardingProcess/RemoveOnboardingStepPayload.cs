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
    public class RemoveOnboardingStepPayload : MutationPayloadGraphType
    {
        private readonly IStepService _stepService;

        public RemoveOnboardingStepPayload(IStepService stepService)
        {
            _stepService = stepService;

            Name = nameof(RemoveOnboardingStepPayload);

            Field<NonNullGraphType<OnboardingPipelinePayload>>("pipeline");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var id = inputs.Get<int>("id");
            var step = _stepService.GetStep(id);
            var pipeline = step.OnboardingPipeline;

            _stepService.Remove(step);

            return new {
                pipeline
            };
        }
    }
}
