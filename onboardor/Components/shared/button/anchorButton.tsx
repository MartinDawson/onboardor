import classnames from "classnames";
import React from "react";

import { IProps as IButtonProps, styleLookup } from "./button";
import styles from "./button.scss";

interface IProps extends IButtonProps {
  href: string;
}

const AnchorButton = ({
  children,
  styleName = "primary",
  className,
  href,
  ...props
}: IProps) => (
  <a
    {...props}
    href={href}
    className={classnames(styles.button, styles.anchorButton, styleLookup(styleName, styles), className)}
  >
    {children}
  </a>
);

export default AnchorButton;
