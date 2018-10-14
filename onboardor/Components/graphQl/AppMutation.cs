using GraphQL.Relay.Types;
using GraphQL.Types;
using onboardor.Components.dashboard.onBoardingCreator;
using onboardor.Components.dashboard.onboardingProcess;
using onboardor.Components.select;
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
            Mutation<AddOnboardingProcessToMemberInput, AddOnboardingProcessToMemberPayload>("addOnboardingProcessToMember");
            Mutation<AddOnboardingStepInput, AddOnboardingStepPayload>("addStep");
            Mutation<EditOnboardingStepInput, EditOnboardingStepPayload>("editStep");
            Mutation<RemoveOnboardingStepInput, RemoveOnboardingStepPayload>("removeStep");
            Mutation<AddOnboardingProcessInput, AddOnboardingProcessPayload>("addProcess");
            Mutation<AddOnboardingPipelineInput, AddOnboardingPipelinePayload>("addPipeline");
            Mutation<EditOnboardingPipelineInput, EditOnboardingPipelinePayload>("editPipeline");
            Mutation<RemoveOnboardingPipelineInput, RemoveOnboardingPipelinePayload>("removePipeline");
            Mutation<SubscribeMailingListInput, SubscribeMailingListPayload>("subscribeMailingList");
            Mutation<SetOnboardingMembersInput, SetOnboardingMembersPayload>("setOnboardingMembers");
            Mutation<CreateOnboardingProcessInput, CreateOnboardingProcessPayload>("createOnboardingProcess");
        }
    }
}
