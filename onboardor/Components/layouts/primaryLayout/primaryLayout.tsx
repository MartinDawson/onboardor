import React from "react";

import Footer from "../../footer/footer";
import styles from "./primaryLayout.scss";
import PrimaryLayoutErrorBoundary from "./primaryLayoutErrorBoundary";

interface IProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({
  children,
}: IProps) => (
  <PrimaryLayoutErrorBoundary className={styles.primaryLayout}>
    <div className={styles.wrap}>
      <div className={styles.main}>
        {children}
      </div>
    </div>
    <Footer />
  </PrimaryLayoutErrorBoundary>
);

export default PrimaryLayout;
