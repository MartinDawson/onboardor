import React from 'react';
import PropTypes from 'prop-types';

import styles from './dashboard.scss';
import Container from '../shared/layout/container';

const Dashboard = ({
  organizations,
}) => (
  <Container className={styles.dashboard}>
    {organizations.map(organization => (
      <div key={organization.id} className={styles.organization}>
        <div className={styles.organizationDetails}>
          <div className={styles.name}>{organization.name}</div>
          <img className={styles.avatarUrl} src={organization.avatarUrl} alt="" />
        </div>
        <div className={styles.selectionDescription}>
          Select your team members that you want to start onboarding for <span>{organization.name}</span>.
        </div>
        <div className={styles.members}>
          {organization.members.map(member => (
            <div key={member.id}>
              <div className={styles.name}>{member.name}</div>
              <img className={styles.avatarUrl} src={member.avatarUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    ))}
  </Container>
);

Dashboard.propTypes = {
  organizations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      members: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Dashboard;
