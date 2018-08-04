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
const StepHeading = ({ ...props }) => <Text {...props} textAlign={["center", "center", "left"]} mb={35} mt={25} fontSize={30} />;
const StepContent = ({ ...props }) => <Box is="ul" {...props} mx={["auto", "auto", "none"]} fontSize={18} />;
const StepItem = ({ children, ...props }: { children: string}) => (
  <Box is="li" width={["initial", "60%", "100%"]} mx={["5%", "20%", 0]} my={12} {...props}>
    <Flex>
      <GreenCheck width={20} height={20} />
      {children}
    </Flex>
  </Box>
);
const DotLinesImage = ({ ...props }) => <Image src={dotLines} {...props} width="66%" mx="auto" style={{ display: "block", ...props.style }}  />;

const LandingPage = ({
  theme,
}: IProps) => (
  <Relative>
    <Absolute style={{ width: "100%" }} zIndex={-1}><BackgroundBlue height={776} width="100%" /></Absolute>
    <Absolute style={{ width: "100%" }} zIndex={-1}><BackgroundGrey height={830} width="100%" /></Absolute>
    <Container pt={50} maxWidth={1100} pt={100} pb={70}>
      <Text textAlign="center" mb={33} fontSize={[40, 56]} color="white">
        For developers. By developers.
      </Text>
      <Text textAlign="center" mb={66} fontSize={[20, 25]} color="white">
        Fast-track your team with a streamlined on-boarding process
      </Text>
      <SubscribeMailingList />
      <Text textAlign="center" mt={20} mb={45} color={theme.colors.primary2}>
        -Coming this September-
      </Text>
      <Box width={[1, "73%"]} mx="auto">
        <Image
          src={laptop}
        />
      </Box>
      <Text textAlign="center" fontSize={[40, 60]} mt={40}>
        HOW IT WORKS
      </Text>
      <Text textAlign="center" mt={15} fontSize={21} color={theme.colors.secondary}>
        Easy, Simple, Fast
      </Text>
      <Box mt={50} mb={300}>
        <StepFlex>
          <Image
            src={board}
          />
          <StepContainer ml={[0, 0, 30]}>
            <StepNumber>1</StepNumber>
            <StepHeading>Easily create your teams on-boarding process directly through GitHub</StepHeading>
            <StepContent>
              <StepItem>30 second setup</StepItem>
              <StepItem>Automatically integrates your team members</StepItem>
              <StepItem>Built for developers, not HR teams</StepItem>
            </StepContent>
          </StepContainer>
        </StepFlex>
        <Hide sm md><DotLinesImage /></Hide>
        <StepFlex>
          <StepContainer >
            <StepNumber>2</StepNumber>
            <StepHeading>Measure and improve your on-boarding with analytics</StepHeading>
            <StepContent>
              <StepItem>Get automated regular feedback from your developers</StepItem>
              <StepItem>A/B test your on-boarding to find what works</StepItem>
              <StepItem>Tracks your developers progress</StepItem>
            </StepContent>
          </StepContainer>
          <Image
            src={analytics}
          />
        </StepFlex>
        <Hide sm md><DotLinesImage style={{ transform: "rotateX(180deg)" }} /></Hide>
        <StepFlex>
          <Image
            src={retentionRate}
          />
          <StepContainer>
            <StepNumber>3</StepNumber>
            <StepHeading>Gain a 50%+ retention rate for new developers</StepHeading>
            <StepContent>
              <StepItem>Justifies your on-boarding process with actual data. No guessing!</StepItem>
              <StepItem>Increases the rate at which your developers reach productivity</StepItem>
              <StepItem>Applies on-boarding best practices for your teams</StepItem>
            </StepContent>
          </StepContainer>
        </StepFlex>
      </Box>
      <Text mb={36} textAlign="center" fontSize={45} color="white">On-boarding experience</Text>
      <SubscribeMailingList />
      <Text mt={90} mb={22} textAlign="center" color="white">ONBOARDOR.COM</Text>
      <Text textAlign="center" color="white">© 2018 Onboardor.com All Rights Reserved.
        <Link to="/privacyPolicy" target="_blank"> Privacy</Link> |
        <Link to="/termsAndConditions" target="_blank"> T&amp;C&apos;s</Link> |
        <Link to="/imprint" target="_blank"> Imprint</Link>
      </Text>
    </Container>
    <Absolute style={{ width: "100%" }} bottom={0} zIndex={-1}><BackgroundBlue height={580} width="100%" style={{ transform: "rotateX(180deg)" }} /></Absolute>
    <Absolute style={{ width: "100%" }} bottom={0} zIndex={-1}><BackgroundGrey height={634} width="100%" style={{ transform: "rotateX(180deg)" }} /></Absolute>
  </Relative>
);

export default withTheme(LandingPage);
