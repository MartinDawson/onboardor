import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation removeOnboardingProcessFromMemberMutation(
    $input: RemoveOnboardingProcessFromMemberInput!
  ) {
    removeOnboardingProcessFromMember(input: $input) {
      member {
        id
      }
    }
  }
`;

export interface IMutationInput {
  processId: number;
}

export default ({ processId }: IMutationInput) => {
  const variables = {
    input: {
      processId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
