using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class EditOnboardingPipelineInput : MutationInputGraphType
    {
        public EditOnboardingPipelineInput()
        {
            Name = nameof(EditOnboardingPipelineInput);

            Field<NonNullGraphType<IntGraphType>>("id");
            Field<NonNullGraphType<StringGraphType>>("name");
        }
    }
}
