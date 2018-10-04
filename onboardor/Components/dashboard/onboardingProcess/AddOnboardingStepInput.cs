using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class AddOnboardingStepInput : MutationInputGraphType
    {
        public AddOnboardingStepInput()
        {
            Name = nameof(AddOnboardingStepInput);

            Field<NonNullGraphType<IntGraphType>>("pipelineId");
            Field<NonNullGraphType<StringGraphType>>("organizationName");
            Field<NonNullGraphType<StringGraphType>>("name");
            Field<StringGraphType>("description");
        }
    }
}
