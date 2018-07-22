import { RedirectException } from "found";
import React from "react";
import { graphql } from "react-relay";
import { compose, flattenProp } from "recompose";
import { IRoute } from "../../types";
import Organization from "./organization";

const query = graphql`
  query organizationContainerQuery(
    $id: ID!
  ) {
    node(
      id: $id
    ) {
      ...on Organization {
        members {
          id
          name
          avatarUrl
        }
      }
    }
  }
`;

const Component = compose(
  flattenProp("node"),
)(Organization);

export const routeConfig = {
  Component,
  query,
  render: (route: IRoute) => {
    if (route.props) {
      throw new RedirectException(
        `${route.match.location.pathname}/createOnboardingProcess`
      );
    }
    return null;
  },
};

export default Component;
