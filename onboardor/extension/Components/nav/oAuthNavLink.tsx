import React from "react";
import { Portal } from "react-portal";

const id = "onboardor-nav-link";

interface IProps {
  setup: string;
}

const OAuthNavLink = ({
  setup,
}: IProps) => (
  <Portal node={document.getElementsByClassName("reponav")[0]}>
    <a
      id={id}
      href={setup}
      className="reponav-item"
    >
      onboardor
    </a>
  </Portal>
);

export default OAuthNavLink;
