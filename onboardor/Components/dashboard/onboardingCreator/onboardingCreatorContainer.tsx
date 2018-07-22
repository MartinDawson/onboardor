import { graphql } from "react-relay";
import { compose, renameProp } from "recompose";
import { reduxForm } from "redux-form";
import OnboardingCreator from "./onboardingCreator";

const query = graphql`
  query onboardingCreatorContainerQuery(
    $id: ID!
  ) {
    node(
      id: $id
    ) {
      ...on Organization {
        name
      }
    }
  }
`;

const Component = compose(
  renameProp("node", "organization"),
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
