import React from 'react';

import styles from './spinnerButton.scss';
import Button from './button';
import SpinnerIcon from '../../icons/spinner';

const SpinnerButton = ({ ...props }) => (
  <Button {...props}>
    <SpinnerIcon className={styles.spinnerIcon} />
  </Button>
);

export default SpinnerButton;
