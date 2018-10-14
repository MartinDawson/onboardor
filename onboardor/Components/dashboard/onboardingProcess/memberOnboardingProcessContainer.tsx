import { graphql } from "react-relay";
import { compose, renameProp, flattenProp } from "recompose";
import MemberOnboardingProcess from "./memberOnboardingProcess";
import { fragment } from "relay-compose";

const query = graphql`
  query memberOnboardingProcessContainerQuery(
    $organizationId: ID!
    $memberId: Int!
  ) {
    node(
      id: $organizationId
    ) {
      ...on Organization {
        ...memberOnboardingProcessContainer_organization
      }
    }
  }
`;

const fragments = graphql`
  fragment memberOnboardingProcessContainer_organization on Organization {
    name
    organizationId
    id
    member(id: $memberId) {
      memberId
      id
      name
      onboardingProcess {
        onboardingProcessId
        name
        onboardingPipelines {
          id
          ...pipelineContainer_pipeline
        }
        closedSteps {
          id
          ...stepContainer_step
        }
        organization {
          organizationId
          name
        }
      }
    }
  }
`;

const Component = compose(
  renameProp("node", "organization"),
  fragment(fragments),
  flattenProp("organization"),
)(MemberOnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
