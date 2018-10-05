import Step from "./step";
import { compose, flattenProp } from "recompose";
import { graphql } from "react-relay";
import { fragment } from "relay-compose";

const fragments = graphql`
  fragment stepContainer_step on OnboardingStep {
    onboardingStepId
    name
    issueNumber
    organization {
      name
    }
  }
`;

export default compose(
  fragment(fragments),
  flattenProp("step"),
)(Step);
