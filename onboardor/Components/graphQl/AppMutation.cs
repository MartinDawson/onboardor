using GraphQL.Relay.Types;
using onboardor.Components.shared.form;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Onboardor.Components.GraphQl
{
    public class AppMutation : MutationGraphType
    {
        public AppMutation()
        {
            Mutation<SubscribeMailingListInput, SubscribeMailingListPayload>("subscribeMailingList");
        }
    }
}
