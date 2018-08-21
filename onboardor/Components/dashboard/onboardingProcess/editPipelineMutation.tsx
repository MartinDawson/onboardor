import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation editPipelineMutation(
    $input: EditOnboardingPipelineInput!
  ) {
    editPipeline(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
      }
    }
  }
`;

export interface IMutationInput {
  id: number;
  name: string;
}

export default ({ id, name }: IMutationInput) => {
  const variables = {
    input: {
      id,
      name,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
