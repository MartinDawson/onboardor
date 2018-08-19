using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class RemoveOnboardingPipelineInput : MutationInputGraphType
    {
        public RemoveOnboardingPipelineInput()
        {
            Name = nameof(RemoveOnboardingPipelineInput);

            Field<NonNullGraphType<IntGraphType>>("organizationId");
            Field<NonNullGraphType<IntGraphType>>("id");
        }
    }
}
