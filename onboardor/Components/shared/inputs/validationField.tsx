import classnames from "classnames";
import React from "react";

import ValidationErrors from "../validation/validationErrors";
import styles from "./validationField.scss";

interface IProps {
  children: React.ReactNode;
  error: string | string[];
  showError?: boolean;
  touched: boolean;
  className?: string;
}

const ValidationField = ({
  children,
  error,
  touched,
  showError,
  className,
}: IProps) => {
  const errors = Array.isArray(error) ? error : [error];
  const hasError = errors.length > 0;

  return (
    <div className={classnames(className, (touched && hasError) && styles.hasError)}>
      <div className={styles.validationField}>
        {children}
      </div>
      {touched && showError ? <ValidationErrors errors={errors} /> : null}
    </div>
  );
};

export default ValidationField;
