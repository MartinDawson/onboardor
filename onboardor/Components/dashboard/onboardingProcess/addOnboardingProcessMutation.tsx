import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation addOnboardingProcessMutation(
    $input: AddOnboardingProcessInput!
  ) {
    addProcess(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
      }
    }
  }
`;

export interface IMutationInput {
  organizationId: number;
  name: string;
  pipelineIds: number[];
}

export default ({ organizationId, name, pipelineIds }: IMutationInput) => {
  const variables = {
    input: {
      organizationId,
      name,
      pipelineIds,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
