import { graphql } from "react-relay";
import { compose } from "recompose";
import SavedOnboardingProcess from "./savedOnboardingProcess";
import { fragment } from "relay-compose";

const fragments = graphql`
  fragment savedOnboardingProcessContainer_process on OnboardingProcess {
    id
    name
  }
`;

export default  compose(
  fragment(fragments),
)(SavedOnboardingProcess);
