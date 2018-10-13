import { graphql } from "react-relay";
import { compose, renameProp } from "recompose";
import OnboardingProcess from "./onboardingProcess";
import { fragment } from "relay-compose";

const query = graphql`
  query onboardingProcessContainerQuery(
    $organizationId: ID!
  ) {
    node(
      id: $organizationId
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
      memberId
      avatarUrl
      name
    }
    onboardingProcesses {
      id
      onboardingProcessId
      name
      organization {
        id
      }
    }
    onboardingPipelines {
      id
      onboardingPipelineId
      onboardingProcess {
        id
      }
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
