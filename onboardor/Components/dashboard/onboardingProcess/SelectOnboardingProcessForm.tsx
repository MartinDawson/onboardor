import { compose, withHandlers } from "recompose";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { IProcess } from "./savedOnboardingProcess";
import React from "react";
import Button from "../../shared/button/button";
import ProcessesSelectInput from "../../shared/inputs/processesSelectInput";
import { IMember } from "../member/member";
import addOnboardingProcessToMemberMutation from "./addOnboardingProcessToMemberMutation";

interface IProps extends InjectedFormProps {
  processes: IProcess[];
  member: IMember;
  cancelOnClick: () => void;
}

interface IOnSubmitParams {
  process: {
    label: string;
    value: number;
  };
}

const handlers = {
  onSubmit: ({ member }: IProps) => ({ process }: IOnSubmitParams) => {
    addOnboardingProcessToMemberMutation({
      memberId: member.memberId,
      processId: process.value,
    });
  },
};

const SelectOnboardingProcessForm = ({
  processes,
  handleSubmit,
  cancelOnClick,
}: IProps) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="process"
      component={ProcessesSelectInput}
      options={processes.map((process) => ({
        label: process.name,
        value: process.onboardingProcessId,
      }))}
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
