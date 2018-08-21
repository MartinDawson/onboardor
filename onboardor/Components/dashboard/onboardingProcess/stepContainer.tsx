import Step, { IEditStepInput } from "./step";
import { compose, withStateHandlers, withHandlers, flattenProp, withProps } from "recompose";
import { graphql } from "react-relay";
import { fragment } from "relay-compose";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";
import removeStepMutation from "./removeStepMutation";
import editStepMutation from "./editStepMutation";

const fragments = graphql`
  fragment stepContainer_step on OnboardingStep {
    onboardingStepId
    name
  }
`;

interface IProps {
  onboardingStepId: number;
  name: string;
  form: string;
  toggleStep: () => void;
}

interface IState {
  isEditingStep: boolean;
}

const stateHandlers = {
  toggleStep: ({ isEditingStep }: IState) => () => ({
    isEditingStep: !isEditingStep,
  }),
};

const handlers = {
  removeStep: ({ onboardingStepId }: IProps) => () =>
    removeStepMutation({ id: onboardingStepId }),
  editStep: ({ onboardingStepId, toggleStep }: IProps) => (input: IEditStepInput) => {
    editStepMutation({
      id: onboardingStepId,
      name: input.stepName,
    }),
    toggleStep();
  },
};

export default compose(
  withProps(({ form }: IProps) => ({
    selector: formValueSelector(form),
  })),
  fragment(fragments),
  flattenProp("step"),
  withStateHandlers({
    isEditingStep: false,
  }, stateHandlers),
  withHandlers(handlers),
  withProps(({ name }: IProps) => ({
    initialValues: {
      stepName: name,
    },
  })),
  reduxForm({}),
  connect((state, { selector }: any) => ({
    removingNameConfirmValue: selector(state, "removingNameConfirm"),
  })),
)(Step);
