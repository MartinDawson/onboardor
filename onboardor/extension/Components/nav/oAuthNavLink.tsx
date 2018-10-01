import React from "react";
import { Portal } from "react-portal";

const id = "onboardor-nav-link";

interface IProps {
  setupOnClick: () => void;
}

const OAuthNavLink = ({
  setupOnClick,
}: IProps) => (
  <Portal node={document.getElementsByClassName("reponav")[0]}>
    <button
      id={id}
      onClick={setupOnClick}
      className="reponav-item"
    >
      onboardor
    </button>
  </Portal>
);

export default OAuthNavLink;
