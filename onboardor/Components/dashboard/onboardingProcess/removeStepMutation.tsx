import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation removeStepMutation(
    $input: RemoveOnboardingStepInput!
  ) {
    removeStep(input: $input) {
      pipeline {
        ...pipelineContainer_pipeline
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
