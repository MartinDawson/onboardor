using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.shared.form
{
    public class SubscribeMailingListInput : MutationInputGraphType
    {
        public SubscribeMailingListInput()
        {
            Name = nameof(SubscribeMailingListInput);

            Field<NonNullGraphType<StringGraphType>>("email");
            Field<NonNullGraphType<StringGraphType>>("recaptcha");
        }
    }
}
