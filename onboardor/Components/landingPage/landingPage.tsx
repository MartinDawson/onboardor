import React from "react";
import { Container, Text, Absolute, Relative } from "rebass";
import { Link } from "found";
import { Box, Flex } from "grid-styled";
import SubscribeMailingList from "../shared/form/subscribeMailingListContainer";
import { withTheme } from "styled-components";
import { IStyleProps } from "../types";
import Laptop from "../../wwwroot/assets/laptop.svg";
import Board from '../../wwwroot/assets/board.svg';
import StepNumber from "./stepNumber";
import BackgroundBlue from '../../wwwroot/assets/backgroundBlue.svg';
import BackgroundGrey from '../../wwwroot/assets/backgroundGrey.svg';
import DotLines from '../../wwwroot/assets/dotLines.svg';
import Analytics from '../../wwwroot/assets/analytics.svg';
import RetentionRate from '../../wwwroot/assets/retentionRate.svg';
import Hide from "../shared/utilities/hide";

interface IProps extends IStyleProps {}

const StepFlex = ({ ...props }) => <Flex {...props} mb={[40, 40, 0]} justifyContent="space-between" alignItems={["center", "center", "stretch"]} flexDirection={["column", "column", "row"]} />;
const StepContainer = ({ ...props }) => <Box {...props} width={[1, 1, 370]} mt={[0, 0, 44]} order={[-1, -1, 0]} />;
const StepHeading = ({ ...props }) => <Text {...props} textAlign={["center", "center", "left"]} mb={35} mt={25} fontSize={30} />;
const StepContent = ({ ...props }) => <Text {...props} textAlign={["center", "center", "left"]} fontSize={18} />;
const DotLinesImage = ({ ...props }) => <DotLines {...props} width="66%" style={{ margin: "0 auto", display: "block", ...props.style }}  />;

const LandingPage = ({
  theme,
}: IProps) => (
  <Relative>
    <Absolute style={{ width: "100%" }} zIndex={-1}><BackgroundBlue height={776} width="100%" /></Absolute>
    <Absolute style={{ width: "100%" }} zIndex={-1}><BackgroundGrey height={830} width="100%" /></Absolute>
    <Container pt={50} maxWidth={1100} pt={100} pb={70}>
      <Text textAlign="center" mb={33} fontSize={[40, 56]} color="white">
        Awesome On-boarding Experience
      </Text>
      <Text textAlign="center" mb={66} fontSize={[20, 25]} color="white">
        Fast-track your developers with a streamlined on-boarding process
      </Text>
      <SubscribeMailingList />
      <Text textAlign="center" mt={20} mb={45} color={theme.colors.primary2}>
        -Coming this September-
      </Text>
      <Box width={[1, "73%"]} mx="auto">
        <Laptop />
      </Box>
      <Text textAlign="center" fontSize={[40, 60]} mt={40}>
        HOW IT WORKS
      </Text>
      <Text textAlign="center" mt={15} fontSize={21} color={theme.colors.secondary}>
        Easy, Simple, Fast
      </Text>
      <Box mt={50} mb={300}>
        <StepFlex>
          <Board />
          <StepContainer ml={[0, 0, 30]}>
            <StepNumber>1</StepNumber>
            <StepHeading>Easily create your teams on-boarding process directly through GitHub</StepHeading>
            <StepContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sem commodo sem sagittis</StepContent>
          </StepContainer>
        </StepFlex>
        <Hide sm md><DotLinesImage /></Hide>
        <StepFlex>
          <StepContainer >
            <StepNumber>2</StepNumber>
            <StepHeading>Measure and improve your on-boarding with analytics</StepHeading>
            <StepContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sem commodo sem sagittis</StepContent>
          </StepContainer>
          <Analytics />
        </StepFlex>
        <Hide sm md><DotLinesImage style={{ transform: "rotateX(180deg)" }} /></Hide>
        <StepFlex>
          <RetentionRate />
          <StepContainer>
            <StepNumber>3</StepNumber>
            <StepHeading>Gain a 50%+ retention rate for new developers</StepHeading>
            <StepContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sem commodo sem sagittis</StepContent>
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
