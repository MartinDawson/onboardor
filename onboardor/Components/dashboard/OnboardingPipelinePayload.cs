﻿using GraphQL.Relay.Types.Temp;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OnboardingPipelinePayload : NodeGraphType<OnboardingPipeline>
    {
        public OnboardingPipelinePayload()
        {
            Name = nameof(OnboardingPipeline);

            Id(x => x.Id);
            Field(x => x.Name);
            Field<NonNullGraphType<ListGraphType<OnboardingStepPayload>>>("OnboardingSteps");
        }

        public override OnboardingPipeline GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
