import { graphql } from "react-relay";
import { compose, withHandlers, withStateHandlers, withProps, flattenProp } from "recompose";
import { reduxForm, formValueSelector } from "redux-form";
import { fragment } from "relay-compose";
import removePipelineMutation from "./removePipelineMutation";
import { connect } from "react-redux";
import editPipelineMutation from "./editPipelineMutation";
import Pipeline, { IEditPipelineInput, IAddOnboardingStepInput } from "./pipeline";
import addStepMutation from "./addStepMutation";

const fragments = graphql`
  fragment pipelineContainer_pipeline on OnboardingPipeline {
    id
    onboardingPipelineId
    name
    onboardingSteps {
      id
      ...stepContainer_step
    }
  }
`;

interface IProps {
  organizationId: number;
  onboardingPipelineId: number;
  name: string;
  form: string;
  togglePipeline: () => void;
  toggleStep: () => void;
}

interface IState {
  isEditingPipeline: boolean;
  isAddingStep: boolean;
}

const stateHandlers = {
  togglePipeline: ({ isEditingPipeline }: IState) => () => ({
    isEditingPipeline: !isEditingPipeline,
  }),
  toggleStep: ({ isAddingStep }: IState) => () => ({
    isAddingStep: !isAddingStep,
  }),
};

const handlers = {
  removePipeline: ({ onboardingPipelineId }: IProps) => () =>
    removePipelineMutation({ id: onboardingPipelineId }),
  editPipeline: ({ onboardingPipelineId, togglePipeline }: IProps) => (input: IEditPipelineInput) => {
    editPipelineMutation({
      id: onboardingPipelineId,
      name: input.pipelineName,
    }),
    togglePipeline();
  },
  addStep: ({ onboardingPipelineId, toggleStep }: IProps) => (input: IAddOnboardingStepInput) => {
    addStepMutation({
      pipelineId: onboardingPipelineId,
      name: input.onboardingStepName,
    }),
    toggleStep();
  },
};

const Component = compose(
  withProps(({ form }: IProps) => ({
    selector: formValueSelector(form),
  })),
  fragment(fragments),
  flattenProp("pipeline"),
  withStateHandlers({
    isEditingPipeline: false,
    isAddingStep: false,
  }, stateHandlers),
  withHandlers(handlers),
  withProps(({ name }: IProps) => ({
    initialValues: {
      pipelineName: name,
    },
  })),
  reduxForm({}),
  connect((state, { selector }: any) => ({
    removingNameConfirmValue: selector(state, "removingNameConfirm"),
  })),
)(Pipeline);

export default Component;
