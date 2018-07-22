import React from "react";
import { Button as RebassButton, ButtonProps } from "rebass";
import { renameProp } from "recompose";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { ITheme } from "../../types";

interface IProps extends ButtonProps {
  appTheme: ITheme;
  [key: string]: any;
}

const Button = styled(({ appTheme, ...props }: IProps) =>
  <RebassButton {...props} bg={appTheme.colors.primary} />)`
  cursor: pointer;
  &:focus {
    box-shadow: none;
  }
`;

export default compose<{}, IProps>(
  withTheme,
  renameProp("theme", "appTheme"),
)(Button);
