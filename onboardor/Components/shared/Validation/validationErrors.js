import React from 'react';
import PropTypes from 'prop-types';

import ValidationError from './validationError';
import styles from './validationErrors.scss';

const ValidationErrors = ({ errors }) => (
  errors.length ? (
    <div className={styles.errors}>
      {errors.map(error => <ValidationError key={error} error={error} />)}
    </div>
  ) : null
);

ValidationErrors.defaultProps = {
  errors: [],
};

ValidationErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ValidationErrors;
