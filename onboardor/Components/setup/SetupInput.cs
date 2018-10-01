using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.setup
{
    public class SetupInput : MutationInputGraphType
    {
        public SetupInput()
        {
            Name = nameof(SetupInput);

            Field<StringGraphType>("redirectUrl");
        }
    }
}
