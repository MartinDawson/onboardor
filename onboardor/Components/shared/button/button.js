import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.scss';

const Button = ({
  children, styleName, className, ...props
}) => (
  <button
    {...props}
    className={classnames(styles.button, styles[styleName], className)}
  >
    {children}
  </button>
);

Button.defaultProps = {
  styleName: 'primary',
  className: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

export default Button;
