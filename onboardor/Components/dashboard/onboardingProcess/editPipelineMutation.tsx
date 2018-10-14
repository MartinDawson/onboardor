import { graphql } from "react-relay";
import { createMutation } from "relay-compose";

const mutation = graphql`
  mutation editPipelineMutation(
    $memberId: Int = null
    $input: EditOnboardingPipelineInput!
  ) {
    editPipeline(input: $input) {
      organization {
        ...onboardingProcessContainer_organization
        ...memberOnboardingProcessContainer_organization
      }
    }
  }
`;

export interface IMutationInput {
  id: number;
  name: string;
  memberId?: number;
}

export default ({ id, name, memberId }: IMutationInput) => {
  const variables = {
    memberId,
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
