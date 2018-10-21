import { graphql } from "react-relay";
import { compose, renameProp, flattenProp, withHandlers } from "recompose";
import MemberOnboardingProcess from "./memberOnboardingProcess";
import { fragment } from "relay-compose";
import removeOnboardingProcessFromMemberMutation from "./removeOnboardingProcessFromMemberMutation";
import Member, { IMember } from "../member/member";
import { IRouter } from "../../types";
import { IOrganization } from "../organization/organization";

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

interface IProps {
  member: IMember;
  router: IRouter;
}

const handlers = {
  removeProcessOnClick: ({ member, router }: IProps) => async () => {
    await removeOnboardingProcessFromMemberMutation({
      memberId: member.memberId,
    });

    router.replace("/onboardor");
  },
};

const Component = compose(
  renameProp("node", "organization"),
  fragment(fragments),
  flattenProp("organization"),
  withHandlers(handlers),
)(MemberOnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
