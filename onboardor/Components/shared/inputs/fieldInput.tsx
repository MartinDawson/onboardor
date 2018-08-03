import React from "react";
import { Input } from "rebass";
import { WrappedFieldProps } from "redux-form";

export interface IFieldInputProps {
  placeholder?: string;
  type?: string;
  [key: string]: any;
}

interface IProps extends WrappedFieldProps, IFieldInputProps {}

const FieldInput = ({
  input,
  name,
  meta,
  ...props
}: IProps) => (
  <Input
    {...input}
    {...props}
    name={name}
  />
);

export default FieldInput;
