import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './content.scss';

const Content = ({ className, children }) => (
  <div className={classnames(styles.content, className)}>
    {children}
  </div>
);

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Content.defaultProps = {
  className: null,
};

export default Content;
