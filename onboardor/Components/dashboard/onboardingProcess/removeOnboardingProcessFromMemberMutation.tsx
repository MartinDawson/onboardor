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
  memberId: number;
}

export default ({ memberId }: IMutationInput) => {
  const variables = {
    input: {
      memberId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
