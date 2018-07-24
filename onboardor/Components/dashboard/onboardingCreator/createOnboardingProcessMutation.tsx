import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation createOnboardingProcessMutation(
    $input: CreateOnboardingProcessInput!
  ) {
    createOnboardingProcess(input: $input) {
      clientMutationId
    }
  }
`;

export interface IMutationInput {
  organizationId: number;
  steps: string[];
}

export default ({ organizationId, steps }: IMutationInput) => {
  const variables = {
    input: {
      organizationId,
      steps,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
