import React from 'react';
import PropTypes from 'prop-types';

import styles from './primaryLayout.scss';
import PrimaryLayoutErrorBoundary from './primaryLayoutErrorBoundary';
import Footer from '../../footer/footer';

const PrimaryLayout = ({
  children,
}) => (
  <PrimaryLayoutErrorBoundary className={styles.primaryLayout}>
    <div className={styles.wrap}>
      <div className={styles.main}>
        {children}
      </div>
    </div>
    <Footer />
  </PrimaryLayoutErrorBoundary>
);

PrimaryLayout.defaultProps = {
  children: null,
};

PrimaryLayout.propTypes = {
  children: PropTypes.node,
};

export default PrimaryLayout;
