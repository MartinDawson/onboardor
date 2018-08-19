import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation removePipelineMutation(
    $input: RemoveOnboardingPipelineInput!
  ) {
    removePipeline(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
      }
    }
  }
`;

export interface IMutationInput {
  organizationId: number;
  id: number;
}

export default ({ id, organizationId }: IMutationInput) => {
  const variables = {
    input: {
      id,
      organizationId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
