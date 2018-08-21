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
    public class EditOnboardingStepPayload : MutationPayloadGraphType
    {
        private readonly IStepService _stepService;

        public EditOnboardingStepPayload(IStepService stepService)
        {
            _stepService = stepService;

            Name = nameof(EditOnboardingStepPayload);

            Field<NonNullGraphType<OnboardingPipelinePayload>>("pipeline");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var id = inputs.Get<int>("id");
            var name = inputs.Get<string>("name");
            var step = _stepService.GetStep(id);

            step.Name = name;

            _stepService.Update(step);

            return new {
                pipeline = step.OnboardingPipeline,
            };
        }
    }
}
