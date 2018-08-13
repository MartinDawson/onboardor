import Dashboard from "./dashboard";
import { IRoute } from "../../../Components/types";
import React from "react";
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
  render: (route: IRoute) => {
    if (route.props &&
      route.props.location.hash === "#onboardor") {
        return <Dashboard {...route.props} />
    }
    return null;
  },
};

export default Dashboard;
