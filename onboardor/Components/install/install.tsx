import React from "react";

import GitHub from "../../wwwroot/assets/gitHub.svg";
import AnchorButton from "../shared/button/anchorButton";
import Content from "../shared/layout/content";
import styles from "./install.scss";

const Install = () => (
  <div className={styles.install}>
    <Content>
      <div className={styles.description}>Install with GitHub to use onboardor</div>
      <div className={styles.signInButtonContainer}>
        <AnchorButton
          className={styles.signInButton}
          href={`https://github.com/apps/${process.env.APP_NAME}`}
        >
          <GitHub />
          Install onboardor
        </AnchorButton>
      </div>
    </Content>
  </div>
);

export default Install;
