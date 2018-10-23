import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { Link } from "found";
import { IStyleProps } from "../../../Components/types";
import classnames from "classnames";

interface IAnchorProps extends IStyleProps {
  selected: boolean;
  className: string;
}

const Anchor = styled(Link)`
  cursor: pointer;
  ${(props: IAnchorProps) => props.selected && (
    `&.reponav-item.selected {
      border-color: ${props.theme.colors.primary} rgb(229, 229, 229) transparent;
    }`
  )}
`;

const OAuthNavLink = ({
  selected,
  className,
}: IAnchorProps) => {
  const node = document.getElementsByClassName("reponav")[0];

  if (!node) {
    return null;
  }

  return (
    <Portal node={node}>
      <Anchor
        to="/onboardor/setup"
        className={classnames("reponav-item", selected && "selected", className)}
        selected={selected}
      >
        onboardor
      </Anchor>
    </Portal>
  );
};

export default OAuthNavLink;
