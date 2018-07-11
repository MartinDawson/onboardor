import React from "react";

import ValidationError from "./validationError";

interface IProps {
  errors?: string[];
}

const ValidationErrors = ({ errors }: IProps) => (
  errors.length ? (
    <div>
      {errors.map((error) => <ValidationError key={error} error={error} />)}
    </div>
  ) : null
);

export default ValidationErrors;
