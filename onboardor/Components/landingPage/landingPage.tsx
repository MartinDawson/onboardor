import React from "react";
import { Container, Text, Absolute, Relative, Image } from "rebass";
import { Link } from "found";
import { Box, Flex, theme } from "grid-styled";
import SubscribeMailingList from "../shared/form/subscribeMailingListContainer";
import styled, { withTheme } from "styled-components";
import { IStyleProps, ITheme } from "../types";
import StepNumber from "./stepNumber";
import BackgroundBlue from "../../wwwroot/assets/backgroundBlue.svg";
import BackgroundGrey from "../../wwwroot/assets/backgroundGrey.svg";
import Hide from "../shared/utilities/hide";
import Check from "../../wwwroot/assets/check.svg";
import laptop from "../../wwwroot/assets/laptop.png";
import dotLines from "../../wwwroot/assets/dotLines.png";
import board from "../../wwwroot/assets/board.png";
import analytics from "../../wwwroot/assets/analytics.png";
import retentionRate from "../../wwwroot/assets/retentionRate.png";

interface IProps extends IStyleProps {}

const GreenCheck = styled(Check)`
  margin-right: 10px;
  min-width: 20px;
  fill: ${({ theme }: IStyleProps) => theme.colors.primary}
`;

const StyledStepFlex = styled(Flex)`
  @media screen and (max-width: ${({ theme }: IStyleProps) => theme.breakpoints[0]}px) {
    > svg {
      width: 100%;
    }
  }
`

const StepFlex = ({ ...props }) => <StyledStepFlex {...props} mb={[40, 40, 0]} justifyContent="space-between" alignItems={["center", "center", "stretch"]} flexDirection={["column", "column", "row"]} />;
const StepContainer = ({ ...props }) => <Box {...props} width={[1, 1, 370]} mt={[0, 0, 44]} order={[-1, -1, 0]} />;
const StepContent = ({ ...props }) => <Box is="ul" {...props} mx={["auto", "auto", "none"]} fontSize={18} />;
const StepItem = ({ children, ...props }: { children: string}) => (
  <Box is="li" width={["initial", "60%", "100%"]} mx={["5%", "20%", 0]} my={12} {...props}>
    <Flex>
      <GreenCheck width={20} height={20} />
      <Text color="white" fontSize={21}>{children}</Text>
    </Flex>
  </Box>
);

const LandingPage = ({
  theme,
}: IProps) => (
  <Relative style={{ height: "100%" }}>
    <Absolute style={{ width: "100%", height: "99%" }} zIndex={-1}><BackgroundBlue height="100%" width="100%" /></Absolute>
    <Absolute style={{ width: "100%", height: "99%" }} zIndex={-1}><BackgroundGrey height="100%" width="100%" /></Absolute>
    <Container pt={50} maxWidth={1100}>
      <Text textAlign="center" mb={34} fontSize={[25, 30]} color="white">
        Setup your teams on-boarding process directly through GitHub
      </Text>
      <Box mt={34} mb={34}>
        <StepFlex>
          <Image
            src={board}
          />
          <StepContainer ml={[0, 0, 30]}>
            <StepContent>
              <StepItem>5 minute setup.</StepItem>
              <StepItem>Uses a familiar GitHub issue board for your on-boarding setup</StepItem>
              <StepItem>Automatically integrates your team members from your organization</StepItem>
              <StepItem>Provides a set of pre-defined on-boarding best practices for you</StepItem>
            </StepContent>
          </StepContainer>
        </StepFlex>
      </Box>
      <SubscribeMailingList />
      <Text textAlign="center" mt={20} mb={45} color={theme.colors.primary2}>
        -Coming this September-
      </Text>
    </Container>
  </Relative>
);

export default withTheme(LandingPage);
