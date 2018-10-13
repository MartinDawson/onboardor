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
  memberId?: number;
  organizationName: string;
  name: string;
}

export default ({ pipelineId, memberId, organizationName, name }: IMutationInput) => {
  const variables = {
    input: {
      pipelineId,
      memberId,
      organizationName,
      name,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
