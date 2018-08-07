import { graphql } from "react-relay";
import { compose, flattenProp } from "recompose";
import Organization from "./organization";

const query = graphql`
  query organizationContainerQuery(
    $id: ID!
  ) {
    node(
      id: $id
    ) {
      ...on Organization {
        name
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
};

export default Component;
