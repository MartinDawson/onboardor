import React from "react";
import Select from "react-select";
import ValidationField from "./validationField";
import { WrappedFieldProps } from "redux-form";

interface IProps extends WrappedFieldProps {
  options: [{
    label: string;
    value: string;
  }];
}

const ProcessesSelectInput = ({
  input,
  options,
  meta: { touched, error = [] },
  ...props
}: IProps) => (
  <ValidationField touched={touched} error={error}>
    <Select
      {...input}
      {...props}
      options={options}
      onBlur={() => input.onBlur(input.value)}
    />
  </ValidationField>
);

export default ProcessesSelectInput;
