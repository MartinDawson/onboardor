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
        private readonly IOnboardingProcessService _processService;

        public RemoveOnboardingProcessFromMemberPayload(
            IOnboardingProcessService processService)
        {
            _processService = processService;

            Name = nameof(RemoveOnboardingProcessFromMemberPayload);

            Field<NonNullGraphType<MemberPayload>>("member");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var processId = inputs.Get<int>("processId");
            var process = _processService.GetProcess(processId);

            _processService.Update(process);

            return new
            {
                member = process.Member
            };
        }
    }
}
