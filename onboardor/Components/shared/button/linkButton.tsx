import classnames from "classnames";
import { Link } from "found";
import React from "react";

import { IProps as IButtonProps, styleLookup } from "./button";
import styles from "./button.scss";

const LinkButton = ({
  children,
  styleName = "primary",
  className,
  ...props
}: IButtonProps) => (
  <Link {...props} className={classnames(styles.button, styles.linkButton, styleLookup(styleName, styles), className)}>
    {children}
  </Link>
);

export default LinkButton;
