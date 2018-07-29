import { graphql } from "react-relay";
import { compose, renameProp, withHandlers } from "recompose";
import { reduxForm } from "redux-form";
import OnboardingCreator from "./onboardingCreator";
import createOnboardingProcessMutation, { IMutationInput } from "./createOnboardingProcessMutation";
import { IRoute } from "../../types";
import { IOrganization } from "../organization/organization";
import logErrors from "../../shared/logErrors";

const query = graphql`
  query onboardingCreatorContainerQuery(
    $id: ID!
  ) {
    node(
      id: $id
    ) {
      ...on Organization {
        organizationId
        name
      }
    }
  }
`;

interface IInput {
  onboardingSteps: {
    _step: string;
  }[];
}

interface IProps {
  router: IRoute;
  organization: IOrganization;
}

const handlers = {
  onSubmit: ({ router, organization }: IProps) => async (input: IInput) => {
    const mutationInput = {
      organizationId: organization.organizationId,
      steps: input.onboardingSteps.map(s => s._step),
    }

    try {
      await createOnboardingProcessMutation(mutationInput);
    } catch (error) {
      logErrors(error)

      throw error;
    }

    // router.push("/install");
  },
};

const Component = compose(
  renameProp("node", "organization"),
  withHandlers(handlers),
  reduxForm({
    form: "onboardingCreator",
    initialValues: {
      onboardingSteps: [{}],
    }
  }),
)(OnboardingCreator);

export const routeConfig = {
  Component,
  query,
};

export default Component;
