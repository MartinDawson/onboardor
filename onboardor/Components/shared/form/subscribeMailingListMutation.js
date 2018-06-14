import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

const mutation = graphql`
  mutation subscribeMailingListMutation(
    $input: SubscribeMailingListInput!
  ) {
    subscribeMailingList(input: $input) {
      clientMutationId
    }
  }
`;

export default ({ email, recaptcha }) => {
  const variables = {
    input: {
      email,
      recaptcha,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
