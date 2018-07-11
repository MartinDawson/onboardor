import React from "react";

import ValidationErrors from "../validation/validationErrors";

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
    <div>
      <div>
        {children}
      </div>
      {touched && showError ? <ValidationErrors errors={errors} /> : null}
    </div>
  );
};

export default ValidationField;
