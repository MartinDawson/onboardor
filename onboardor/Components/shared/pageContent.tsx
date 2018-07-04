import React from "react";

import styles from "./pageContent.scss";

interface IProps {
  children: React.ReactNode;
}

const PageContent = ({ children }: IProps) => (
  <div className={styles.pageContent}>
    {children}
  </div>
);

export default PageContent;
