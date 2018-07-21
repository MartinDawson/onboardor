import { graphql } from "react-relay";
import { compose, flattenProp } from "recompose";

import Member from "./member";

const query = graphql`
  query memberContainerQuery(
    $id: ID!
  ) {
    node(id: $id) {
      ...on Member {
        name
        avatarUrl
      }
    }
  }
`;

const Component = compose(
  flattenProp("node"),
)(Member);

export const routeConfig = {
  Component,
  query,
};

export default Member;
