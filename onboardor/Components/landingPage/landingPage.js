import React from 'react';

import SubscribeMailingList from '../shared/form/subscribeMailingListContainer';
import styles from './landingPage.scss';

const LandingPage = () => (
  <div className={styles.landingPage}>
    <div className={styles.capture}>
      Make the process of onboarding your new developers easy.
    </div>

    <div className={styles.joinContainer}>
      <div className={styles.join}>
        Join our beta sign up list and we&apos;ll give your team a <span>free sixth month subscription!</span>
      </div>

      <SubscribeMailingList />

      <div className={styles.coming}>Coming this August.</div>
    </div>
  </div>
);

export default LandingPage;
