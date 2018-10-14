import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation removePipelineMutation(
    $memberId: Int = null
    $input: RemoveOnboardingPipelineInput!
  ) {
    removePipeline(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
        ...memberOnboardingProcessContainer_organization
      }
    }
  }
`;

export interface IMutationInput {
  id: number;
  memberId?: number;
}

export default ({ id, memberId }: IMutationInput) => {
  const variables = {
    memberId,
    input: {
      id,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
