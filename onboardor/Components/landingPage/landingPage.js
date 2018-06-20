import React from 'react';

import SubscribeMailingList from '../shared/form/subscribeMailingListContainer';
import styles from './landingPage.scss';
import CollaborationIcon from '../../wwwroot/assets/collaboration.svg';
import CoinDollarIcon from '../../wwwroot/assets/coin-dollar.svg';
import TreeIcon from '../../wwwroot/assets/tree.svg';

const howItWorksList = [
  { icon: <CollaborationIcon />, description: 'Register your team' },
  { icon: <TreeIcon />, description: 'Manage your developers' },
  { icon: <CoinDollarIcon />, description: 'Improve your onboarding process by 250%' },
];

const LandingPage = () => (
  <div className={styles.landingPage}>
    <div className={styles.content}>
      <div className={styles.join}>
        Join our beta sign up list and we&apos;ll give your team a <span>free sixth month subscription!</span>
      </div>

      <SubscribeMailingList className={styles.subscribeMailingList} />

      <div className={styles.coming}>Coming this August.</div>

      <div className={styles.howItWorks}>
        {howItWorksList.map(item => (
          <div key={item.description} className={styles.howItWorksItem}>
            <div className={styles.iconContainer}>{item.icon}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LandingPage;
