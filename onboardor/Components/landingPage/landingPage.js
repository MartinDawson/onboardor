import React from 'react';

import SubscribeMailingList from '../shared/form/subscribeMailingListContainer';
import styles from './landingPage.scss';
import CollaborationIcon from '../../wwwroot/assets/collaboration.svg';
import CoinsIcon from '../../wwwroot/assets/coins.svg';
import TreeIcon from '../../wwwroot/assets/tree.svg';
import UserPlusIcon from '../../wwwroot/assets/user-plus.svg';
import ArrowDownIcon from '../../wwwroot/assets/arrow-down.svg';
import Content from '../shared/layout/content';

const howItWorksList = [
  { id: 'register', icon: <CollaborationIcon />, description: 'Register your team' },
  { id: 'add', icon: <UserPlusIcon />, description: 'Add your new team members' },
  { id: 'manage', icon: <TreeIcon />, description: 'Manage and mentor them with onboardor' },
  {
    id: 'improve',
    icon: <CoinsIcon />,
    description: <div>Improve your on-boarding process by up to <span className={styles.important}>250%</span></div>,
  },
];

const LandingPage = () => (
  <div className={styles.landingPage}>
    <Content>
      <div className={styles.join}>
        Enter your email to get started. We&apos;ll also give your team a <span>free sixth month subscription!</span>
      </div>
      <SubscribeMailingList className={styles.subscribeMailingList} />
      <div className={styles.howItWorks}>
        {howItWorksList.map(item => (
          <div key={item.id} className={styles.howItWorksItem}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.line}><ArrowDownIcon /></div>
            </div>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </Content>
  </div>
);

export default LandingPage;
