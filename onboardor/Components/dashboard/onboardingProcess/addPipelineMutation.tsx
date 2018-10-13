import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation addPipelineMutation(
    $input: AddOnboardingPipelineInput!
  ) {
    addPipeline(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
      }
      member {
        ...memberOnboardingProcessContainer_member
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
