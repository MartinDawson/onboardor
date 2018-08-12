import React from "react";

const id = "onboardor-nav-link";

interface IProps {
  setup: string;
}

const OAuthNavLink = ({
  setup,
}: IProps) => (
  <a
    id={id}
    href={setup}
    className="reponav-item"
  >
    onboardor
  </a>
);

export default OAuthNavLink;
