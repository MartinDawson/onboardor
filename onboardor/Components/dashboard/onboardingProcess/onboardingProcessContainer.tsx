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
    members {
      id
      avatarUrl
      name
    }
    onboardingProcesses {
      id
      name
    }
    onboardingSteps {
      id
      isClosed
      ...stepContainer_step
    }
    onboardingPipelines {
      id
      onboardingPipelineId
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
