import React from 'react';
import PropTypes from 'prop-types';

import ValidationField from './validationField';
import styles from './fieldInput.scss';

const FieldInput = ({
  input,
  meta: { form, touched, error = [] },
  id,
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <input
      {...input}
      {...props}
      className={styles.input}
      id={`${form}_${id}`}
    />
  </ValidationField>
);

FieldInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    form: PropTypes.string.isRequired,
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(PropTypes.string.isRequired),
    ]),
  }).isRequired,
  id: PropTypes.string.isRequired,
};


export default FieldInput;
