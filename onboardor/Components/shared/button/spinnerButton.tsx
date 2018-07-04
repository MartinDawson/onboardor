import React from "react";

import SpinnerIcon from "../../../wwwroot/assets/spinner.svg";
import Button from "./button";
import styles from "./spinnerButton.scss";

const SpinnerButton = ({
  ...props
}) => (
  <Button {...props}>
    <SpinnerIcon className={styles.spinnerIcon} />
  </Button>
);

export default SpinnerButton;
