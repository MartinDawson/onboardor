using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.select
{
    public class SetOnboardingMembersInput : MutationInputGraphType
    {
        public SetOnboardingMembersInput()
        {
            Name = nameof(SetOnboardingMembersInput);

            Field<NonNullGraphType<ListGraphType<IntGraphType>>>("memberIds");
        }
    }
}
