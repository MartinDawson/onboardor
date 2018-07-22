import { RedirectException } from "found";
import React from "react";
import { graphql } from "react-relay";

import { IRoute } from "../../types";
import Organizations from "./organizations";

const query = graphql`
  query organizationsContainerQuery {
    organizations {
      id
      name
      avatarUrl
    }
  }
`;

export const routeConfig = {
  Component: Organizations,
  query,
  render: (route: IRoute) => {
    if (route.props) {
      if (route.props.organizations.length === 1) {
        throw new RedirectException(
          `${route.match.location.pathname}/organization/${route.props.organizations[0].id}`
        );
      }

      return <Organizations {...route.props} />;
    }
    return null;
  },
};

export default Organizations;
