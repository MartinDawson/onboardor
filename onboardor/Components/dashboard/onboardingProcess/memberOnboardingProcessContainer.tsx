import { graphql } from "react-relay";
import { compose, renameProp, flattenProp, withHandlers, withProps } from "recompose";
import MemberOnboardingProcess from "./memberOnboardingProcess";
import { fragment } from "relay-compose";
import removeOnboardingProcessFromMemberMutation from "./removeOnboardingProcessFromMemberMutation";
import { IMember } from "../member/member";
import { IRouter } from "../../types";
import { IProcess } from "./savedOnboardingProcess";

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
      onboardingProcesses {
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
  currentProcess: IProcess;
  organizationId: number;
}

const createProps = ({ member, organizationId }: IProps) => ({
  currentProcess: member.onboardingProcesses.find((process) => process.organization.organizationId === organizationId)
});

const handlers = {
  removeProcessOnClick: ({ currentProcess, router }: IProps) => async () => {
    await removeOnboardingProcessFromMemberMutation({
      processId: currentProcess.onboardingProcessId,
    });

    router.replace("/onboardor");
  },
};

const Component = compose(
  renameProp("node", "organization"),
  fragment(fragments),
  flattenProp("organization"),
  withProps(createProps),
  withHandlers(handlers),
)(MemberOnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
