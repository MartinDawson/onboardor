import React from "react";
import Textarea from "react-textarea-autosize";
import { WrappedFieldProps } from "redux-form";

import ValidationField from "./validationField";

export interface IFieldTextAreaProps {
  name: string;
  placeholder?: string;
  type?: string;
  [key: string]: any;
}

interface IProps extends WrappedFieldProps, IFieldTextAreaProps {}

const FieldResizableTextArea = ({
  input,
  meta: { touched, error = [] },
  name,
  ...props
}: IProps) => (
  <ValidationField touched={touched} error={error}>
    <Textarea
      {...input}
      {...props}
      name={name}
      onChange={(e) => input.onChange(e.currentTarget.value)}
    />
  </ValidationField>
);

export default FieldResizableTextArea;
