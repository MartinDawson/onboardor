import React from "react";
import { Container, Text, Root } from "rebass";
import { Box } from "grid-styled";
import styled, { withTheme } from "styled-components";

import Footer from "../../footer/footer";
import PrimaryLayoutErrorBoundary from "./primaryLayoutErrorBoundary";
import { ITheme } from "../../types";

interface IProps {
  children: React.ReactNode;
  theme: ITheme
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
      <Footer />
    </CustomRoot>
  </PrimaryLayoutErrorBoundary>
);

export default withTheme(PrimaryLayout);
