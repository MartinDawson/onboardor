import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import styles from './primaryLayout.less';
import PrimaryLayoutErrorBoundary from './primaryLayoutErrorBoundary';
import Footer from '../../footer/footer';

const PrimaryLayout = ({
  children,
}) => (
  <PrimaryLayoutErrorBoundary className={styles.primaryLayout}>
    <div className={styles.wrap}>
      <div className={styles.main}>
        <Link to="/" className={styles.appName}>
          Onboardor
          <div className={styles.betaLabel}>beta</div>
        </Link>
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
