import PrimaryLayout from "./primaryLayout";
import { graphql } from "react-relay";
import React from "react";
import { IRoute } from "../../../../Components/types";

const query = graphql`
  query primaryLayoutContainerQuery(
    $redirectUrl: String
  ) {
    ...navLinkContainer_navLink
  }
`;

const PrimaryLayoutContainer = PrimaryLayout;
const isOnRepositoryPage = document.getElementsByClassName("reponav").length;

export const routeConfig = {
  prepareVariables: () => ({
    redirectUrl: `${location.origin}${location.pathname}%23/onboardor`
  }),
  getQuery: () => {
    if (isOnRepositoryPage) return query;

    return null;
  },
  Component: PrimaryLayoutContainer,
  render: (route: IRoute) => {
    if (route.props && isOnRepositoryPage) {
      return <PrimaryLayoutContainer {...route.props} />;
    }
    return null;
  },
};

export default PrimaryLayoutContainer;
