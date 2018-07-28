import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation subscribeMailingListMutation(
    $input: SubscribeMailingListInput!
  ) {
    subscribeMailingList(input: $input) {
      clientMutationId
    }
  }
`;

export interface IMutationInput {
  email: string;
  recaptcha: string;
}

export default ({ email, recaptcha }: IMutationInput) => {
  const variables = {
    input: {
      email,
      recaptcha: null,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
