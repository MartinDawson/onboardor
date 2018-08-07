using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onBoardingCreator
{
    public class CreateOnboardingProcessInput : MutationInputGraphType
    {
        public CreateOnboardingProcessInput()
        {
            Name = nameof(CreateOnboardingProcessInput);

            Field<NonNullGraphType<IntGraphType>>("organizationId");
            Field<NonNullGraphType<ListGraphType<StringGraphType>>>("steps");
        }
    }
}
