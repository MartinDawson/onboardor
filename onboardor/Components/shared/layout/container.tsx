import classnames from "classnames";
import React from "react";

import styles from "./container.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({
  className,
  children,
}: IProps) => (
  <div className={classnames(styles.container, className)}>
    {children}
  </div>
);

export default Container;
