using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class RemoveOnboardingStepInput : MutationInputGraphType
    {
        public RemoveOnboardingStepInput()
        {
            Name = nameof(RemoveOnboardingStepInput);

            Field<NonNullGraphType<IntGraphType>>("id");
        }
    }
}
