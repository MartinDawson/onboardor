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
        private readonly IMemberService _memberService;

        public MemberPayload(IMemberService memberService)
        {
            _memberService = memberService;

            Name = nameof(Member);

            Id(x => x.Id);
            Field(x => x.Name);
            Field(x => x.AvatarUrl);
            Field(x => x.IsBeingOnboarded);
            Field<OrganizationPayload>("organization");
        }

        public override Member GetById(string id)
        {
            return _memberService.GetMember(int.Parse(id));
        }
    }
}
