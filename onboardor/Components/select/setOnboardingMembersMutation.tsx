import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation setOnboardingMembersMutation(
    $input: SetOnboardingMembersInput!
  ) {
    setOnboardingMembers(input: $input) {
      clientMutationId
    }
  }
`;

export interface IMutationInput {
  memberIds: number[];
}

export default (input: IMutationInput) => {
  const variables = {
    input,
  };

  return createMutation(
    mutation,
    variables,
  );
};
