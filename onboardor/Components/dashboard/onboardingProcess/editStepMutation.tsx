import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation editStepMutation(
    $input: EditOnboardingStepInput!
  ) {
    editStep(input: $input) {
      pipeline {
        ...pipelineContainer_pipeline
      }
    }
  }
`;

export interface IMutationInput {
  id: number;
  name: string;
}

export default ({ id, name }: IMutationInput) => {
  const variables = {
    input: {
      id,
      name,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
