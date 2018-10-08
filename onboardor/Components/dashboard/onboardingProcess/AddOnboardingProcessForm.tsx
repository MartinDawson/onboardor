import React from "react";
import { compose, withHandlers } from "recompose";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import createFieldValidator from "../../shared/inputs/createFieldValidator";
import FieldInput from "../../shared/inputs/fieldInput";
import Button from "../../shared/button/button";
import addOnboardingProcessMutation from "./addOnboardingProcessMutation";
import { IOrganization } from "../organization/organization";

const addOnboardingProcessValidator = createFieldValidator(["required"]);

interface IAddOnboardingProcessFormProps extends InjectedFormProps {
  addOnboardingProcess: () => void;
  cancelOnClick: () => void;
}

interface IProps {
  organization: IOrganization;
}

interface IAddOnboardinProcessParams {
  name: string;
}

const handlers = {
  addOnboardingProcess: ({ organization }: IProps) =>
    ({ name }: IAddOnboardinProcessParams) => {
    addOnboardingProcessMutation({
      organizationId: organization.organizationId,
      name,
      pipelineIds: organization.onboardingPipelines.map((x) => x.onboardingPipelineId)
    });
  },
};

const AddOnboardingProcessForm = ({
  addOnboardingProcess,
  handleSubmit,
  cancelOnClick,
}: IAddOnboardingProcessFormProps) => (
  <form onSubmit={handleSubmit(addOnboardingProcess)} action="">
    <Field
      component={FieldInput}
      name="name"
      placeholder={`i.e. Front-end onboarding process`}
      mb={10}
      validate={addOnboardingProcessValidator}
    />
    <Button mr={10}>Save</Button>
    <Button type="button" onClick={cancelOnClick}>Cancel</Button>
  </form>
);

export default compose(
  reduxForm({
    form: "AddOnboardingProcess",
  }),
  withHandlers(handlers),
)(AddOnboardingProcessForm);
