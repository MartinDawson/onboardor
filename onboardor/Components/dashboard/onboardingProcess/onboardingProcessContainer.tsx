import { graphql } from "react-relay";
import { compose, renameProp, withHandlers } from "recompose";
import OnboardingProcess from "./onboardingProcess";
import { fragment } from "relay-compose";
import { withRouter } from "found";
import { IRouter, IMatch } from "../../types";
import { IMember } from "../member/member";

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
    id
    organizationId
    name
    avatarUrl
    members {
      id
      memberId
      avatarUrl
      name
      onboardingProcesses {
        organization {
          organizationId
        }
      }
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

interface IProps {
  router: IRouter;
  match: IMatch;
}

const handlers = {
  onboardedMemberOnClick: ({ router, match }: IProps) => (member: IMember) => {
    router.push(`${match.location.pathname}/member/${member.memberId}`);
  }
};

const Component = compose(
  withRouter,
  renameProp("node", "organization"),
  fragment(fragments),
  withHandlers(handlers),
)(OnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
