import { graphql } from "react-relay";
import { compose, renameProp, flattenProp } from "recompose";
import { fragment } from "relay-compose";
import SavedOnboardingProcess from "./savedOnboardingProcess";

const query = graphql`
  query savedOnboardingProcessContainerQuery(
    $organizationId: ID!
    $processId: Int!
  ) {
    node(
      id: $organizationId
    ) {
      ...on Organization {
        ...savedOnboardingProcessContainer_organization
      }
    }
  }
`;

const fragments = graphql`
  fragment savedOnboardingProcessContainer_organization on Organization {
    name
    organizationId
    id
    onboardingProcess(id: $processId) {
      onboardingProcessId
      name
      onboardingPipelines {
        id
        ...pipelineContainer_pipeline
      }
      organization {
        organizationId
        name
      }
    }
  }
`;

const Component = compose(
  renameProp("node", "organization"),
  fragment(fragments),
  flattenProp("organization"),
)(SavedOnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
