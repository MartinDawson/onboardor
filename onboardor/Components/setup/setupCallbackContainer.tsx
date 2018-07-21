import { RedirectException } from "found";
import { graphql } from "react-relay";

import { IMatch, IRoute } from "../types";

const query = graphql`
  query setupCallbackContainerQuery(
    $code: String!
    $state: String!
  ) {
    setupCallback(
      code: $code
      state: $state
    )
  }
`;

export const routeConfig = {
  prepareVariables: (_: IRoute, { location }: IMatch) => ({
    code: location.query.code,
    state: location.query.state,
  }),
  query,
  render: (route: IRoute): null => {
    if (route.props) {
      if (route.props.setupCallback) {
        throw new RedirectException("/dashboard");
      }
      // Handle errors
    }
    return null;
  },
};
