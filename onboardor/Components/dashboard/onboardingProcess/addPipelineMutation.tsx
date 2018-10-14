import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation addPipelineMutation(
    $memberId: Int = null
    $input: AddOnboardingPipelineInput!
  ) {
    addPipeline(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
        ...memberOnboardingProcessContainer_organization
      }
    }
  }
`;

export interface IMutationInput {
  organizationId: number;
  memberId?: number;
  name: string;
}

export default ({ organizationId, memberId, name }: IMutationInput) => {
  const variables = {
    memberId,
    input: {
      organizationId,
      memberId,
      name,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
