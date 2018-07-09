import React from "react";
import { BlockLink, LinkProps } from "rebass";
import styled, { withTheme } from "styled-components";
import { ITheme } from "../../types";

interface IProps extends LinkProps {
  theme: ITheme;
}

const AnchorButton = styled(({ theme, ...props }: IProps) =>
  <BlockLink {...props} p={15} color="white" bg={theme.colors.primary} />)`
  border-radius: 4px;
`;

export default withTheme(AnchorButton);
