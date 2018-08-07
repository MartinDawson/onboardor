import { graphql } from "react-relay";
import { compose, renameProp, withHandlers, withProps } from "recompose";
import OnboardingProcess from "./onboardingProcess";

const query = graphql`
  query onboardingProcessContainerQuery(
    $id: ID!
  ) {
    node(
      id: $id
    ) {
      ...on Organization {
        organizationId
        name
        onboardingPipelines {
          id
          name
          onboardingSteps {
            id
            name
            description
          }
        }
      }
    }
  }
`;

const Component = compose(
  renameProp("node", "organization"),
)(OnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
