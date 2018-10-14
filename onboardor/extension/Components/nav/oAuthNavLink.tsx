import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { Link } from "found";

const Anchor = styled(Link)`
  cursor: pointer;
`;

const OAuthNavLink = () => (
  <Portal node={document.getElementsByClassName("reponav")[0]}>
    <Anchor
      id="onboardor-nav-link"
      to="/setup"
      className="reponav-item"
    >
      onboardor
    </Anchor>
  </Portal>
);

export default OAuthNavLink;
