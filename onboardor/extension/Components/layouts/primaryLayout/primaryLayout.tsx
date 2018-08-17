import React from "react";
import { Root } from "rebass";
import { withTheme } from "styled-components";

import PrimaryLayoutErrorBoundary from "../../../../Components/layouts/primaryLayout/primaryLayoutErrorBoundary";
import { ITheme } from "../../../../Components/types";
import NavLink from "../../nav/navLinkContainer";

interface IProps {
  children: React.ReactNode;
  theme: ITheme;
}

const PrimaryLayout = ({
  children,
  theme,
  ...props
}: IProps) => (
  <PrimaryLayoutErrorBoundary>
    <Root color={theme.colors.grey}>
      <NavLink navLink={props} />
      {children}
    </Root>
  </PrimaryLayoutErrorBoundary>
);

export default withTheme(PrimaryLayout);
