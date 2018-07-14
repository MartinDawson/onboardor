import { RedirectException } from "found";
import React from "react";
import { graphql } from "react-relay";
import { branch, compose, renderComponent, withProps } from "recompose";

import LandingPage from "../landingPage/landingPage";
import { IOrganization } from "../select/selectOrganization";
import { IRoute } from "../types";
import Dashboard from "./dashboard";

const query = graphql`
  query dashboardContainerQuery {
    organizations {
      id
      name
      avatarUrl
      members {
        id
        name
        avatarUrl
        isBeingOnboarded
      }
    }
  }
`;

const Component = compose(
  // TODO: Remove
  withProps(({ organizations }) => ({ organization: organizations[0]}))
)(Dashboard);

interface IRoute {
  props: {
    organizations: IOrganization[];
  };
}

export const routeConfig = {
  Component,
  // query,
  render: (route: IRoute) => {
    if (route.props) {
      // if (!route.props.organizations) {
      //   return new RedirectException("/landingPage");
      // }

      // if (!route.props.organizations.some((x) => x.members.some((z) => z.isBeingOnboarded))) {
      //   return new RedirectException("/select");
      // }

      return <Component {...route.props} />;
      // Handle errors
    }
    return null;
  },
};

export default Dashboard;
