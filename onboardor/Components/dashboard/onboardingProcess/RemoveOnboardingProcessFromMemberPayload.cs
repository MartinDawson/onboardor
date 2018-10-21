using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard.onboardingProcess
{
    public class RemoveOnboardingProcessFromMemberPayload : MutationPayloadGraphType
    {
        private readonly IMemberService _memberService;

        public RemoveOnboardingProcessFromMemberPayload(
            IMemberService memberService)
        {
            _memberService = memberService;

            Name = nameof(RemoveOnboardingProcessFromMemberPayload);

            Field<NonNullGraphType<MemberPayload>>("member");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var memberId = inputs.Get<int>("memberId");
            var member = _memberService.GetMember(memberId);

            member.OnboardingProcess = null;

            _memberService.Update(member);

            return new
            {
                member
            };
        }
    }
}
