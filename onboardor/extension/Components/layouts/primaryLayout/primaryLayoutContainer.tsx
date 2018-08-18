import PrimaryLayout from "./primaryLayout";
import { graphql } from "react-relay";

const query = graphql`
  query primaryLayoutContainerQuery(
    $redirectUrl: String
  ) {
    ...navLinkContainer_navLink
  }
`;

const PrimaryLayoutContainer = PrimaryLayout;

export const routeConfig = {
  prepareVariables: () => ({
    redirectUrl: `${location.origin}${location.pathname}%23/onboardor`
  }),
  query,
  Component: PrimaryLayoutContainer,
};

export default PrimaryLayoutContainer;
