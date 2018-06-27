import { graphql } from 'react-relay';
import { RedirectException } from 'found';

import Dashboard from '../dashboard/dashboardContainer';

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
  query,
  render: ({ props }) => {
    if (props) {
      if (props.setup) {
        throw new RedirectException('/dashboard');
      }
      // Handle errors
    }
    return null;
  },
  prepareVariables: (_, { location }) => ({
    installationId: location.query.installation_id,
  }),
};

export default Dashboard;
