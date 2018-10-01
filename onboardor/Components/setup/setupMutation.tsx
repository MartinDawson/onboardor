import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation setupMutation(
    $input: SetupInput!
  ) {
    setup(input: $input) {
      oAuthLoginUrl
    }
  }
`;

export interface IMutationInput {
  redirectUrl: string;
}

export default ({ redirectUrl }: IMutationInput) => {
  const variables = {
    input: {
      redirectUrl,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
