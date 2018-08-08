import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation addPipelineMutation(
    $input: AddOnboardingPipelineInput!
  ) {
    addPipeline(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
      }
    }
  }
`;

export interface IMutationInput {
  organizationId: number;
  name: string;
}

export default ({ organizationId, name }: IMutationInput) => {
  const variables = {
    input: {
      organizationId,
      name,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
