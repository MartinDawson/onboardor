import React from "react";
import { Input } from "rebass";

import { WrappedFieldProps } from "redux-form";
import ValidationField from "./validationField";

export interface IProps extends WrappedFieldProps {
  name: string;
}

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
