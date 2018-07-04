import React from "react";

import ValidationError from "./validationError";
import styles from "./validationErrors.scss";

interface IProps {
  errors?: string[];
}

const ValidationErrors = ({ errors }: IProps) => (
  errors.length ? (
    <div className={styles.errors}>
      {errors.map((error) => <ValidationError key={error} error={error} />)}
    </div>
  ) : null
);

export default ValidationErrors;
