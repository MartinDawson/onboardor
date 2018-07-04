import React from "react";

import Container from "../shared/layout/container";
import styles from "./dashboard.scss";

interface IProps {
  organizations: [{
    id: string
    name: string,
    avatarUrl: string
    members: [{
      id: string
      name: string
      avatarUrl: string,
    }],
  }];
}

const Dashboard = ({
  organizations,
}: IProps) => (
  <Container className={styles.dashboard}>
    {organizations.map((organization) => (
      <div key={organization.id}>
        <div className={styles.organizationDetails}>
          <div className={styles.name}>{organization.name}</div>
          <img className={styles.avatarUrl} src={organization.avatarUrl} alt="" />
        </div>
        <div className={styles.selectionDescription}>
          Select your team members that you want to start onboarding for <span>{organization.name}</span>.
        </div>
        <div className={styles.members}>
          {organization.members.map((member) => (
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

export default Dashboard;
