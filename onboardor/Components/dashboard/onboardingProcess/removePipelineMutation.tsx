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
  id: number;
}

export default ({ id }: IMutationInput) => {
  const variables = {
    input: {
      id,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
