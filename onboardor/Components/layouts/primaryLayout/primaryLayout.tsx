import { Box } from "grid-styled";
import React from "react";
import { Container, Root, Text } from "rebass";
import styled, { withTheme } from "styled-components";

import { ITheme } from "../../types";
import PrimaryLayoutErrorBoundary from "./primaryLayoutErrorBoundary";

interface IProps {
  children: React.ReactNode;
  theme: ITheme;
}

const CustomContainer = styled(Container)`
  min-height: 100%;
`;

const CustomRoot = styled(Root)`
  height: 100%;
`;

const PrimaryLayout = ({
  children,
  theme,
}: IProps) => (
  <PrimaryLayoutErrorBoundary>
    <CustomRoot color={theme.colors.grey}>
      <CustomContainer>
        <Box pb={80}>
          {children}
        </Box>
      </CustomContainer>
    </CustomRoot>
  </PrimaryLayoutErrorBoundary>
);

export default withTheme(PrimaryLayout);
