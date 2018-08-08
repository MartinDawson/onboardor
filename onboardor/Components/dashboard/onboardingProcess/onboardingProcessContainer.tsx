import { graphql } from "react-relay";
import { compose, renameProp, withHandlers, withStateHandlers } from "recompose";
import OnboardingProcess from "./onboardingProcess";
import addPipelineMutation from "./addPipelineMutation";
import { reduxForm } from "redux-form";
import { IOrganization } from "../organization/organization";
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
      name
      onboardingSteps {
        id
        name
        description
      }
    }
  }
`;

interface IProps {
  organization: IOrganization;
}

interface IState {
  isAddingPipeline: boolean;
}

interface IInput {
  name: string;
}

const handlers = {
  onSubmit: ({ organization }: IProps) => (input: IInput) =>
    addPipelineMutation({ organizationId: organization.organizationId, ...input }),
};

const stateHandlers = {
  togglePipeline: ({ isAddingPipeline }: IState) => () => ({
    isAddingPipeline: !isAddingPipeline,
  }),
};

const Component = compose(
  renameProp("node", "organization"),
  fragment(fragments),
  withStateHandlers({ isAddingPipeline: false }, stateHandlers),
  withHandlers(handlers),
  reduxForm({
    form: 'onboarding',
  }),
)(OnboardingProcess);

export const routeConfig = {
  Component,
  query,
};

export default Component;
