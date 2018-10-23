import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { Link } from "found";
import { IStyleProps } from "../../../Components/types";
import classnames from "classnames";

interface IAnchorProps extends IStyleProps {
  selected: boolean;
  id: string;
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
  id,
}: IAnchorProps) => (
  <Portal node={document.getElementsByClassName("reponav")[0]}>
    <Anchor
      id={id}
      to="/onboardor/setup"
      className={classnames("reponav-item", selected && "selected")}
      selected={selected}
    >
      onboardor
    </Anchor>
  </Portal>
);

export default OAuthNavLink;
