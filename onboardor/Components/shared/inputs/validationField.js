import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ValidationErrors from '../validation/validationErrors';
import styles from './validationField.scss';

const ValidationField = ({
  children,
  error,
  touched,
  showError,
  className,
}) => {
  let errors = error;

  if (!Array.isArray(error)) {
    errors = [error];
  }

  const hasError = errors.length > 0;

  return (
    <div className={classnames(className, (touched && hasError) && styles.hasError)}>
      <div className={styles.validationField}>
        {children}
      </div>
      {touched && showError ? <ValidationErrors errors={errors} /> : null}
    </div>
  );
};

ValidationField.defaultProps = {
  error: null,
  className: null,
  showError: true,
};

ValidationField.propTypes = {
  showError: PropTypes.bool,
  children: PropTypes.node.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  className: PropTypes.string,
};

export default ValidationField;
