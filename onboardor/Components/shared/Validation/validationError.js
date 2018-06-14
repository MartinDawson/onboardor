import React from 'react';
import PropTypes from 'prop-types';

import styles from './validationError.scss';

const ValidationError = ({ error }) => (
  error && (
    <span className={styles.error}>
      {error}
    </span>
  )
);

ValidationError.defaultProps = {
  error: null,
};

ValidationError.propTypes = {
  error: PropTypes.string,
};

export default ValidationError;
