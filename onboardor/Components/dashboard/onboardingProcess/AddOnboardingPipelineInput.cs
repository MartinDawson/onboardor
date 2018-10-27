using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class AddOnboardingPipelineInput : MutationInputGraphType
    {
        public AddOnboardingPipelineInput()
        {
            Name = nameof(AddOnboardingPipelineInput);

            Field<NonNullGraphType<IntGraphType>>("organizationId");
            Field<IntGraphType>("processId");
            Field<NonNullGraphType<StringGraphType>>("name");
        }
    }
}
