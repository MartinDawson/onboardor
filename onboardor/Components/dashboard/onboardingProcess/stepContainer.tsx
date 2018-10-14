import Step from "./step";
import { compose, flattenProp, withHandlers, withProps, withState } from "recompose";
import { graphql, RelayRefetchProp } from "react-relay";
import { refetchContainer } from "relay-compose";
import { IOrganization } from "../organization/organization";
import { IMember } from "../member/member";

const fragments = graphql`
  fragment stepContainer_step on OnboardingStep {
    onboardingStepId
    name
    issueNumber
    isClosed
  }
`;

const refetchQuery = graphql`
  query stepContainerRefetchQuery(
    $memberId: Int = null
    $organizationId: ID!
  ) {
    organizationNode: node(
      id: $organizationId
    ) {
      ...on Organization {
        ...onboardingProcessContainer_organization
        ...memberOnboardingProcessContainer_organization
      }
    }
  }
`;

interface IProps {
  organization: IOrganization;
  issueNumber: number;
  setIssueContent: (issueContent: Element | null, callback: () => void) => void;
  issueUrl: string;
  relay: RelayRefetchProp;
  member?: IMember;
}

const createProps = ({
  organization,
  issueNumber,
}: IProps) => ({
  issueUrl:  `${window.location.origin}/${organization.name}/__onboarding__/issues/${issueNumber}`,
});

const handlers = {
  stepOnClick: ({ issueUrl, setIssueContent }: IProps) => async (openPortal: () => void) => {
    const response = await fetch(issueUrl);

    const text = await response.text();
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const issueContent = htmlDocument.documentElement.getElementsByClassName("repository-content")[0];

    setIssueContent(issueContent, () => openPortal());
  },
  closeModal: ({ relay, organization, member }: IProps) => (closePortal: () => void) => {
    relay.refetch({
      organizationId: organization.id,
      memberId: member ? member.memberId : undefined,
    });
    closePortal();
  },
};

export default compose(
  refetchContainer(fragments, refetchQuery),
  flattenProp("step"),
  withState("issueContent", "setIssueContent", null),
  withProps(createProps),
  withHandlers(handlers),
)(Step);
