import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation addStepMutation(
    $input: AddOnboardingStepInput!
  ) {
    addStep(input: $input) {
      pipeline {
        ...pipelineContainer_pipeline
      }
    }
  }
`;

interface IMutationInput {
  pipelineId: number;
  organizationName: string;
  name: string;
  description?: string;
}

export default ({ pipelineId, organizationName, name, description }: IMutationInput) => {
  const variables = {
    input: {
      pipelineId,
      organizationName,
      name,
      description,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
