import React from "react";
import { graphql } from "react-relay";

import { IMatch, IRoute } from "../types";
import Setup from "./setup";

const query = graphql`
  query setupContainerQuery {
    setup
  }
`;

export const routeConfig = {
  prepareVariables: (_: IRoute, { location }: IMatch) => ({
    code: location.query.code,
  }),
  query,
  render: (route: IRoute): React.ReactNode => route.props && <Setup url={route.props.setup} />,
};
