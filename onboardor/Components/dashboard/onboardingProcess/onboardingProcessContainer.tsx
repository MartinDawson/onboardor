import { graphql } from "react-relay";
import { compose, renameProp } from "recompose";
import OnboardingProcess from "./onboardingProcess";
import { fragment } from "relay-compose";

const query = graphql`
  query onboardingProcessContainerQuery(
    $id: ID!
  ) {
    node(
      id: $id
    ) {
      ...on Organization {
        ...onboardingProcessContainer_organization
      }
    }
  }
`;

const fragments = graphql`
  fragment onboardingProcessContainer_organization on Organization {
    organizationId
    name
    onboardingPipelines {
      id
      ...pipelineContainer_pipeline
    }
  }
`;

const Component = compose(
  renameProp("node", "organization"),
  fragment(fragments),
)(OnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
