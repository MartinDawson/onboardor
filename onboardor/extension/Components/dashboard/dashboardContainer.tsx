import Dashboard from "./dashboard";
import { graphql } from "react-relay";

const query = graphql`
  query dashboardContainerQuery {
    organizations {
      id
      name
      avatarUrl
    }
  }
`;

export const routeConfig = {
  Component: Dashboard,
  query,
};

export default Dashboard;
