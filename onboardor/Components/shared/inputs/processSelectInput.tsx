import React from "react";
import { IProcess } from "../../dashboard/onboardingProcess/savedOnboardingProcess";
import ProcessSelectInput from "./processesSelectInput";
import { Field } from "redux-form";

interface IProps {
  processes: IProcess[];
}

const ProcessesField = ({ processes, ...props }: IProps) => {
  const options = processes.map((process) => ({ label: process.name, value: process.id }));

  return (
    <Field
      {...props}
      name="processes"
      component={ProcessSelectInput}
      options={options}
    />
  );
};

export default ProcessesField;
