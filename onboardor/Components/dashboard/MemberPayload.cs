using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types.Temp;
using GraphQL.Types;

namespace onboardor.Components.dashboard
{
    public class MemberPayload : NodeGraphType<Member>
    {
        public MemberPayload()
        {
            Name = nameof(Member);

            Id(x => x.Id);
            Field(x => x.Name);
            Field(x => x.AvatarUrl);
            Field<OrganizationPayload>("organization");
        }

        public override Member GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
