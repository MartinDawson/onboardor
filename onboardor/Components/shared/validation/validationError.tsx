import React from "react";

import styles from "./validationError.scss";

interface IProps {
  error?: string;
}

const ValidationError = ({
  error,
}: IProps) => (
  error && (
    <span className={styles.error}>
      {error}
    </span>
  )
);

export default ValidationError;
