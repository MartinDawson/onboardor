import React from 'react';

import Button from './button';
import SpinnerIcon from '../../../wwwroot/assets/spinner.svg';
import styles from './spinnerButton.scss';

const SpinnerButton = ({ ...props }) => (
  <Button {...props}>
    <SpinnerIcon className={styles.spinnerIcon} />
  </Button>
);

export default SpinnerButton;
