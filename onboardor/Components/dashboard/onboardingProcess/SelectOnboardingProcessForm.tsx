import { compose, withHandlers } from "recompose";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { IProcess } from "./savedOnboardingProcess";
import React from "react";
import Button from "../../shared/button/button";
import ProcessesSelectInput from "../../shared/inputs/processesSelectInput";

const handlers = {
  onSubmit: () => ({ processes }) => {
debugger
  },
};

interface ISelectOnboardingProcessFormProps extends InjectedFormProps {
  processes: IProcess[];
  cancelOnClick: () => void;
}

const SelectOnboardingProcessForm = ({
  processes,
  handleSubmit,
  cancelOnClick,
}: ISelectOnboardingProcessFormProps) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="processes"
      component={ProcessesSelectInput}
      options={processes.map((process) => ({ label: process.name, value: process.id }))}
    />
    <Button mt={10} mr={10}>Confirm</Button>
    <Button type="button" onClick={cancelOnClick}>Cancel</Button>
  </form>
);

export default compose(
  withHandlers(handlers),
  reduxForm({
    form: "SelectOnboardingProcess",
  }),
)(SelectOnboardingProcessForm);
