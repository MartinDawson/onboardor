import React from "react";
import { Container, Text, Absolute, Relative } from "rebass";
import { Box, Flex } from "grid-styled";
import SubscribeMailingList from "../shared/form/subscribeMailingListContainer";
import styled from "styled-components";
import { IStyleProps } from "../types";
import BackgroundBlue from "../../wwwroot/assets/backgroundBlue.svg";
import Check from "../../wwwroot/assets/check.svg";
import StepNumber from "./stepNumber";
import DotLines from "../../wwwroot/assets/dotLines.svg";
import Hide from "../shared/utilities/hide";

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
`;

const StepFlex = ({ ...props }) => <StyledStepFlex {...props} mb={[40, 40, 0]} justifyContent="space-between" alignItems={["center", "center", "stretch"]} flexDirection={["column", "column", "row"]} />;
const StepContainer = ({ ...props }) => <Box {...props} width={[1, 1, 370]} mt={[0, 0, 44]} order={[-1, -1, 0]} />;
const StepHeading = ({ ...props }) => <Text {...props} textAlign={["center", "center", "left"]} mb={35} mt={25} fontSize={30} />;
const StepContent = ({ ...props }) => <Box is="ul" {...props} mx={["auto", "auto", "none"]} fontSize={18} />;
const StepItem = ({ children, ...props }: { children: string}) => (
  <Box is="li" width={["initial", "60%", "100%"]} mx={["5%", "20%", 0]} my={12} {...props}>
    <Flex>
      <GreenCheck width={20} height={20} />
      <Text color="white" fontSize={21}>{children}</Text>
    </Flex>
  </Box>
);
const DotLinesImage = ({ ...props }) => <DotLines {...props} width="66%" style={{ margin: "0 auto", display: "block", ...props.style }}  />;

const LandingPage = () => (
  <Relative>
    <Absolute style={{ width: "100%", height: 435 }} zIndex={-1}>
      <BackgroundBlue height="100%" width="100%" />
    </Absolute>
    <Container pt={150} maxWidth={1100}>
      <Text textAlign="center" mb={34} fontSize={24} color="white">
        Enter your email to get the chrome extension
      </Text>
      <SubscribeMailingList
        subscribeText="Install Extension"
        subscribeOnClick={() =>
          window.open(`https://chrome.google.com/webstore/detail/onboardor/${process.env.EXTENSION_ID}`, "_blank")
        }
      />
      <Text textAlign="center" fontSize={[40, 60]} mt={165}>
        How It Works
      </Text>
      <Box mt={50} mb={300}>
        <StepFlex>
          image
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
        <Hide sm={true} md={true}><DotLinesImage /></Hide>
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
          image
        </StepFlex>
        <Hide sm={true} md={true}><DotLinesImage style={{ transform: "rotateX(180deg)" }} /></Hide>
        <StepFlex>
          image
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
      <SubscribeMailingList />
    </Container>
    <Absolute style={{ width: "100%", height: 300, bottom: "-4%" }} zIndex={-1}>
      <BackgroundBlue height="100%" width="100%" style={{ transform: "rotateX(180deg)" }} />
    </Absolute>
  </Relative>
);

export default LandingPage;
