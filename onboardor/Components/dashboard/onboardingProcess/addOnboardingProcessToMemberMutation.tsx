import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation addOnboardingProcessToMemberMutation(
    $input: AddOnboardingProcessToMemberInput!
  ) {
    addOnboardingProcessToMember(input: $input) {
      member {
        id
      }
    }
  }
`;

export interface IMutationInput {
  memberId: number;
  processId: number;
}

export default ({ memberId, processId }: IMutationInput) => {
  const variables = {
    input: {
      memberId,
      processId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
