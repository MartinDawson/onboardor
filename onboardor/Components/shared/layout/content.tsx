import classnames from "classnames";
import React from "react";

import styles from "./content.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({
  className,
  children,
}: IProps) => (
  <div className={classnames(styles.content, className)}>
    {children}
  </div>
);

export default Content;
