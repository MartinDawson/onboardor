import React from "react";
import { Root } from "rebass";
import { withTheme } from "styled-components";

import { ITheme } from "../../types";
import PrimaryLayoutErrorBoundary from "./primaryLayoutErrorBoundary";

interface IProps {
  children: React.ReactNode;
  theme: ITheme;
}

const PrimaryLayout = ({
  children,
  theme,
}: IProps) => (
  <PrimaryLayoutErrorBoundary>
    <Root style={{ height: "100%" }} color={theme.colors.grey}>
      {children}
    </Root>
  </PrimaryLayoutErrorBoundary>
);

export default withTheme(PrimaryLayout);
