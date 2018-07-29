import React from "react";

import ValidationErrors from "../validation/validationErrors";

interface IProps {
  children: React.ReactNode;
  error: string | string[];
  touched: boolean;
}

const ValidationField = ({
  children,
  error,
  touched,
}: IProps) => {
  const errors = Array.isArray(error) ? error : [error];
  const hasErrors = errors.length > 0;

  return (
    <div>
      <div>
        {children}
      </div>
      {touched && hasErrors && <ValidationErrors errors={errors} />}
    </div>
  );
};

export default ValidationField;
