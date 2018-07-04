import { RedirectException } from "found";
import { graphql } from "react-relay";

import Dashboard from "../dashboard/dashboardContainer";
import { Match, Route } from "../types/index";

const query = graphql`
  query setupContainerQuery(
    $installationId: Int!
  ) {
    setup(
      installationId: $installationId
    )
  }
`;

export const routeConfig = {
  Component: Dashboard,
  prepareVariables: (_: Route, { location }: Match) => ({
    installationId: location.query.installation_id,
  }),
  query,
  render: (route: Route): null => {
    if (route.props) {
      if (route.props.setup) {
        throw new RedirectException("/dashboard");
      }
      // Handle errors
    }
    return null;
  },
};

export default Dashboard;
