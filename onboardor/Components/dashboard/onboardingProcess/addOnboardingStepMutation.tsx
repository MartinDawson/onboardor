import { graphql } from "react-relay";
import { createMutation } from "relay-compose";
import { IAddOnboardingStepInput } from "./pipeline";

const mutation = graphql`
  mutation addOnboardingStepMutation(
    $input: AddOnboardingStepInput!
  ) {
    addOnboardingStep(input: $input) {
      pipeline {
        ...pipelineContainer_pipeline
      }
    }
  }
`;

interface IMutationInput {
  pipelineId: number;
  name: string;
  description?: string;
}

export default ({ pipelineId, name, description }: IMutationInput) => {
  const variables = {
    input: {
      pipelineId,
      name,
      description,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
