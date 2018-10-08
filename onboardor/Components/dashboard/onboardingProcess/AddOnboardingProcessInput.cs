using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class AddOnboardingProcessInput : MutationInputGraphType
    {
        public AddOnboardingProcessInput()
        {
            Name = nameof(AddOnboardingProcessInput);

            Field<NonNullGraphType<IntGraphType>>("organizationId");
            Field<NonNullGraphType<StringGraphType>>("name");
            Field<NonNullGraphType<ListGraphType<IntGraphType>>>("pipelineIds");
        }
    }
}
