import React from "react";
import { Container, Text, Absolute, Relative } from "rebass";
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

interface IProps extends IStyleProps {}

const LandingPage = ({
  theme,
}: IProps) => (
  <Relative>
    <Absolute zIndex={-1}><BackgroundBlue height={776} width="100vw" /></Absolute>
    <Absolute zIndex={-1}><BackgroundGrey height={830} width="100vw" /></Absolute>
    <Container pt={50} maxWidth={1100} pt={100} pb={70}>
      <Text textAlign="center" mb={33} fontSize={56} color="white">
        Awesome On-boarding Experience
      </Text>
      <Text textAlign="center" mb={66} fontSize={25} color="white">
        Fast-track your developers with a streamlined on-boarding process
      </Text>
      <SubscribeMailingList />
      <Text textAlign="center" mt={20} mb={45} color={theme.colors.primary2}>
        -Coming this September-
      </Text>
      <Box width="80%" mx="auto">
        <Laptop />
      </Box>
      <Text textAlign="center" mt={50} fontSize={21} color={theme.colors.secondary}>
        HOW IT WORKS
      </Text>
      <Text textAlign="center" mt={40} fontSize={60}>
        Easy, Simple, Fast
      </Text>
      <Box mt={146} mb={300}>
        <Flex>
          <Board />
          <Box width={370} ml={80} mt={44}>
            <StepNumber>1</StepNumber>
            <Text mb={35} mt={25} fontSize={30}>Easily create your teams on-boarding process directly through GitHub</Text>
            <Text fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sem commodo sem sagittis</Text>
          </Box>
        </Flex>
        <DotLines width="63%" style={{ margin: "0 auto", display: "block" }} />
        <Flex>
          <Box width={370} mr={80} mt={44}>
            <StepNumber>2</StepNumber>
            <Text mb={35} mt={25} fontSize={30}>Measure and improve your on-boarding with analytics</Text>
            <Text fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sem commodo sem sagittis</Text>
          </Box>
          <Analytics />
        </Flex>
        <DotLines width="63%" style={{ margin: "0 auto", display: "block", transform: "rotateX(180deg)" }} />
        <Flex>
          <Board />
          <Box width={370} ml={80} mt={44}>
            <StepNumber>3</StepNumber>
            <Text mb={35} mt={25} fontSize={30}>Gain a 50%+ retention rate for new developers</Text>
            <Text fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sem commodo sem sagittis</Text>
          </Box>
        </Flex>
      </Box>
      <Text mb={36} textAlign="center" fontSize={45} color="white">On-boarding experience</Text>
      <SubscribeMailingList />
      <Text mt={90} mb={22} textAlign="center" color="white">ONBOARDOR.COM</Text>
      <Text textAlign="center" color="white">© 2018 Onboardor.com All Rights Reserved. Privacy | Contact</Text>
    </Container>
    <Absolute bottom={0} zIndex={-1}><BackgroundBlue height={580} width="100vw" style={{ transform: "rotateX(180deg)" }} /></Absolute>
    <Absolute bottom={0} zIndex={-1}><BackgroundGrey height={634} width="100vw" style={{ transform: "rotateX(180deg)" }} /></Absolute>
  </Relative>
);

export default withTheme(LandingPage);
