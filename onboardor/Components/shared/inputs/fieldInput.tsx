import React from "react";

import { WrappedFieldProps } from "redux-form";
import styles from "./fieldInput.scss";
import ValidationField from "./validationField";

export interface IProps extends WrappedFieldProps {
  id: string;
  name: string;
}

const FieldInput = ({
  input,
  meta: { form, touched, error = [] },
  id,
  name,
  ...props
}: IProps) => (
  <ValidationField touched={touched} error={error}>
    <input
      {...input}
      {...props}
      name={name}
      className={styles.input}
      id={`${form}_${id}`}
    />
  </ValidationField>
);

export default FieldInput;
