import PrimaryLayout from "./primaryLayout";
import { graphql } from "react-relay";

const query = graphql`
  query primaryLayoutContainerQuery {
    ...navLinkContainer_navLink
  }
`;

const PrimaryLayoutContainer = PrimaryLayout;

export const routeConfig = {
  query,
  Component: PrimaryLayoutContainer,
};

export default PrimaryLayoutContainer;
