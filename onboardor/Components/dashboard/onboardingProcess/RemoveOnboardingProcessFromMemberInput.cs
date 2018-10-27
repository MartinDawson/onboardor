using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class RemoveOnboardingProcessFromMemberInput : MutationInputGraphType
    {
        public RemoveOnboardingProcessFromMemberInput()
        {
            Name = nameof(RemoveOnboardingProcessFromMemberInput);

            Field<NonNullGraphType<IntGraphType>>("processId");
        }
    }
}
