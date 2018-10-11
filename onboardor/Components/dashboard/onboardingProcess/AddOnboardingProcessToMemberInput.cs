using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onBoardingCreator
{
    public class AddOnboardingProcessToMemberInput : MutationInputGraphType
    {
        public AddOnboardingProcessToMemberInput()
        {
            Name = nameof(AddOnboardingProcessToMemberInput);

            Field<NonNullGraphType<IntGraphType>>("memberId");
            Field<NonNullGraphType<IntGraphType>>("processId");
        }
    }
}
