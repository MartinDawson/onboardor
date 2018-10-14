import { graphql } from "react-relay";

import { IMatch, IRoute } from "../types";

const query = graphql`
  query setupContainerQuery(
    $redirectUrl: String
  ) {
    setup(redirectUrl: $redirectUrl)
  }
`;

export const routeConfig = {
  prepareVariables: () => ({
    redirectUrl: `${window.location.origin}${window.location.pathname}%23/onboardor`
  }),
  query,
  render: (route: IRoute) => {
    if (route.props) {
      window.location.href = route.props.setup;
    }
    return null;
  },
};
