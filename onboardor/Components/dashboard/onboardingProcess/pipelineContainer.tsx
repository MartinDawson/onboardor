import { graphql } from "react-relay";
import { compose, withHandlers, withStateHandlers, withProps, setPropTypes } from "recompose";
import { reduxForm, formValueSelector } from "redux-form";
import { IOrganization } from "../organization/organization";
import { fragment } from "relay-compose";
import removePipelineMutation from "./removePipelineMutation";
import { connect } from "react-redux";
import editPipelineMutation from "./editPipelineMutation";
import Pipeline, { IEditPipelineInput, IPipline, IAddOnboardingStepInput } from "./pipeline";
import addOnboardingStepMutation from "./addOnboardingStepMutation";

const fragments = graphql`
  fragment pipelineContainer_pipeline on OnboardingPipeline {
    id
    onboardingPipelineId
    name
    onboardingSteps {
      id
      name
      description
    }
  }
`;

interface IProps {
  organizationId: number;
  pipeline: IPipline;
  form: string;
  togglePipeline: () => void;
  toggleOnboardingStep: () => void;
}

interface IState {
  isEditingPipeline: boolean;
  isAddingOnboardingStep: boolean;
}

const handlers = {
  removePipeline: ({ pipeline, organizationId }: IProps) => () =>
    removePipelineMutation({ id: pipeline.onboardingPipelineId, organizationId }),
  editPipeline: ({ pipeline, organizationId, togglePipeline }: IProps) => (input: IEditPipelineInput) => {
    editPipelineMutation({
      id: pipeline.onboardingPipelineId,
      organizationId,
      name: input.pipelineName,
    }),
    togglePipeline();
  },
  addOnboardingStep: ({ pipeline, toggleOnboardingStep }: IProps) => (input: IAddOnboardingStepInput) => {
    addOnboardingStepMutation({
      pipelineId: pipeline.onboardingPipelineId,
      name: input.onboardingStepName,
    }),
    toggleOnboardingStep();
  },
};

const stateHandlers = {
  togglePipeline: ({ isEditingPipeline }: IState) => () => ({
    isEditingPipeline: !isEditingPipeline,
  }),
  toggleOnboardingStep: ({ isAddingOnboardingStep }: IState) => () => ({
    isAddingOnboardingStep: !isAddingOnboardingStep,
  }),
};

const Component = compose(
  withProps(({ form }: IProps) => ({
    selector: formValueSelector(form),
  })),
  fragment(fragments),
  withStateHandlers({
    isEditingPipeline: false,
    isAddingOnboardingStep: false,
  }, stateHandlers),
  withHandlers(handlers),
  withProps(({ pipeline }: IProps) => ({
    initialValues: {
      pipelineName: pipeline.name,
    },
  })),
  reduxForm({}),
  connect((state, { selector }: any) => ({
    removingNameConfirmValue: selector(state, "removingNameConfirm"),
  })),
)(Pipeline);

export default Component;
