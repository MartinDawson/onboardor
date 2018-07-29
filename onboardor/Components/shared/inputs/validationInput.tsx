import React from "react";
import { Input } from "rebass";
import { WrappedFieldProps } from "redux-form";

import ValidationField from "./validationField";

export interface IFieldInputProps {
  name: string;
  placeholder?: string;
  type?: string;
  [key: string]: any;
}

interface IProps extends WrappedFieldProps, IFieldInputProps {}

const FieldInput = ({
  input,
  meta: { touched, error = [] },
  name,
  ...props
}: IProps) => (
  <ValidationField touched={touched} error={error}>
    <Input
      {...input}
      {...props}
      name={name}
    />
  </ValidationField>
);

export default FieldInput;
