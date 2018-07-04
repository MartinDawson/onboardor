import classnames from "classnames";
import React from "react";

import styles from "./button.scss";

export interface IProps {
  children: React.ReactNode;
  className?: string;
  styleName?: string;
}

interface IStyleLookup {
  [key: string]: string;
}

export const styleLookup = (styleName: string, lookup: IStyleLookup): string => lookup[styleName];

const Button = ({
  children,
  styleName = "primary",
  className,
  ...props
}: IProps) => (
  <button
    {...props}
    className={classnames(styles.button, styleLookup(styleName, styles), className)}
  >
    {children}
  </button>
);

export default Button;
