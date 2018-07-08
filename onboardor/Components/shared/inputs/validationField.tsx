import classnames from "classnames";
import React from "react";

import ValidationErrors from "../validation/validationErrors";
import styles from "./validationField.scss";

interface IProps {
  children: React.ReactNode;
  error: string | string[];
  showError?: boolean;
  touched: boolean;
}

const ValidationField = ({
  children,
  error,
  touched,
  showError,
}: IProps) => {
  const errors = Array.isArray(error) ? error : [error];
  const hasError = errors.length > 0;

  return (
    <div className={classnames((touched && hasError) && styles.hasError)}>
      <div className={styles.validationField}>
        {children}
      </div>
      {touched && showError ? <ValidationErrors errors={errors} /> : null}
    </div>
  );
};

export default ValidationField;
