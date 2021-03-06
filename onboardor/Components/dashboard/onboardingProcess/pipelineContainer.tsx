import { graphql } from "react-relay";
import { compose, withHandlers, withStateHandlers, withProps, flattenProp } from "recompose";
import { reduxForm, formValueSelector } from "redux-form";
import { fragment } from "relay-compose";
import removePipelineMutation from "./removePipelineMutation";
import { connect } from "react-redux";
import editPipelineMutation from "./editPipelineMutation";
import Pipeline, { IEditPipelineInput, IAddOnboardingStepInput } from "./pipeline";
import addStepMutation from "./addStepMutation";
import { IMember } from "../member/member";
import { IOrganization } from "../organization/organization";

const fragments = graphql`
  fragment pipelineContainer_pipeline on OnboardingPipeline {
    id
    onboardingPipelineId
    name
    onboardingSteps {
      id
      isClosed
      ...stepContainer_step
    }
  }
`;

interface IProps {
  organization: IOrganization;
  onboardingPipelineId: number;
  name: string;
  form: string;
  togglePipeline: () => void;
  toggleStep: () => void;
  member?: IMember;
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
  removePipeline: ({ onboardingPipelineId, member }: IProps) => () =>
    removePipelineMutation({
      id: onboardingPipelineId,
      memberId: member ? member.memberId : undefined,
    }),
  editPipeline: ({ onboardingPipelineId, togglePipeline, member }: IProps) => (input: IEditPipelineInput) => {
    editPipelineMutation({
      id: onboardingPipelineId,
      name: input.pipelineName,
      memberId: member ? member.memberId : undefined,
    });
    togglePipeline();
  },
  addStep: ({
    onboardingPipelineId,
    toggleStep,
    member,
    organization
  }: IProps) => (input: IAddOnboardingStepInput) => {
    addStepMutation({
      organizationName: organization.name,
      pipelineId: onboardingPipelineId,
      name: input.onboardingStepName,
      memberId: member ? member.memberId : undefined,
    });
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
