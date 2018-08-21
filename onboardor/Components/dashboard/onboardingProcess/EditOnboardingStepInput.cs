using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class EditOnboardingStepInput : MutationInputGraphType
    {
        public EditOnboardingStepInput()
        {
            Name = nameof(EditOnboardingStepInput);

            Field<NonNullGraphType<IntGraphType>>("id");
            Field<NonNullGraphType<StringGraphType>>("name");
        }
    }
}
