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
  organizationId: number;
  id: number;
  name: string;
}

export default ({ id, organizationId, name }: IMutationInput) => {
  const variables = {
    input: {
      id,
      organizationId,
      name,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
