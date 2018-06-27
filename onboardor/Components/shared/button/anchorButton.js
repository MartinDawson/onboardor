import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.scss';

const AnchorButton = ({
  children, styleName, className, ...props
}) => (
  <a
    {...props}
    className={classnames(styles.button, styles.anchorButton, styles[styleName], className)}
  >
    {children}
  </a>
);

AnchorButton.defaultProps = {
  styleName: 'primary',
  className: null,
};

AnchorButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

export default AnchorButton;
