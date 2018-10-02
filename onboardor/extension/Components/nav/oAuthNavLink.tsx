import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";

const id = "onboardor-nav-link";

const Anchor = styled.a`
  cursor: pointer;
`;

interface IProps {
  setupOnClick: () => void;
}

const OAuthNavLink = ({
  setupOnClick,
}: IProps) => (
  <Portal node={document.getElementsByClassName("reponav")[0]}>
    <Anchor
      id={id}
      onClick={setupOnClick}
      className="reponav-item"
    >
      onboardor
    </Anchor>
  </Portal>
);

export default OAuthNavLink;
