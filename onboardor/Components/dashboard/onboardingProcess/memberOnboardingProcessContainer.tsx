import { graphql } from "react-relay";
import { compose, renameProp } from "recompose";
import MemberOnboardingProcess from "./memberOnboardingProcess";
import { fragment } from "relay-compose";

const query = graphql`
  query memberOnboardingProcessContainerQuery(
    $memberId: ID!
  ) {
    node(
      id: $memberId
    ) {
      ...on Member {
        ...memberOnboardingProcessContainer_member
      }
    }
  }
`;

const fragments = graphql`
  fragment memberOnboardingProcessContainer_member on Member {
    name
    onboardingProcess {
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
`;

const Component = compose(
  renameProp("node", "member"),
  fragment(fragments),
)(MemberOnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
