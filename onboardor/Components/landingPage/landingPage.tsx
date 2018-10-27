import React from "react";
import { Container, Text, Absolute, Relative, Image} from "rebass";
import { Box, Flex } from "grid-styled";
import SubscribeMailingList from "../shared/form/subscribeMailingListContainer";
import styled from "styled-components";
import { IStyleProps } from "../types";
import BackgroundBlue from "../../wwwroot/assets/backgroundBlue.svg";
import Check from "../../wwwroot/assets/check.svg";
import StepNumber from "./stepNumber";
import DotLines from "../../wwwroot/assets/dotLines.svg";
import Hide from "../shared/utilities/hide";
import StepOne from "../../wwwroot/assets/step1.jpg";
import StepTwo from "../../wwwroot/assets/step2.jpg";
import StepThree from "../../wwwroot/assets/step3.jpg";

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
const StepContainer = ({ ...props }) => <Box {...props} width={[1, 1, 370]} mt={[0, 0, 44]} mb={[30, 30, 0]} order={[-1, -1, 0]} />;
const StepHeading = ({ ...props }) => <Text {...props} textAlign={["center", "center", "left"]} mb={35} mt={25} fontSize={30} />;
const StepContent = ({ ...props }) => <Box is="ul" {...props} mx={["auto", "auto", "none"]} fontSize={18} />;
const StepItem = ({ children, ...props }: { children: string}) => (
  <Box is="li" width={["initial", "60%", "100%"]} mx={["5%", "20%", 0]} my={12} {...props}>
    <Flex>
      <GreenCheck width={20} height={20} />
      <Text fontSize={21}>{children}</Text>
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
          <Image
            src={StepOne}
          />
          <StepContainer>
            <StepNumber>1</StepNumber>
            <StepHeading>Install the chrome onboardor extension</StepHeading>
            <StepContent>
              <StepItem>Onboard new members through GitHub. No external software.</StepItem>
            </StepContent>
          </StepContainer>
        </StepFlex>
        <Hide sm={true} md={true}><DotLinesImage /></Hide>
        <StepFlex>
          <StepContainer >
            <StepNumber>2</StepNumber>
            <StepHeading>Authorize any organizations that you want to onboard your members for</StepHeading>
            <StepContent>
              <StepItem>Automatically pulls in your organizations and team members instantly.</StepItem>
              <StepItem>30 second setup.</StepItem>
            </StepContent>
          </StepContainer>
          <Image
            src={StepTwo}
          />
        </StepFlex>
        <Hide sm={true} md={true}><DotLinesImage style={{ transform: "rotateX(180deg)" }} /></Hide>
        <StepFlex>
          <Image
            src={StepThree}
          />
          <StepContainer>
            <StepNumber>3</StepNumber>
            <StepHeading>Onboard your new team members directly through GitHub</StepHeading>
            <StepItem>Create an onboarding process template for each organization.</StepItem>
            <StepItem>Save your onboarding processes for different teams, i.e backend team, frontend team.</StepItem>
            <StepItem>Apply your saved onboarding processes to new team members in one click.</StepItem>
          </StepContainer>
        </StepFlex>
      </Box>
      <SubscribeMailingList
        subscribeText="Install Extension"
        subscribeOnClick={() =>
          window.open(`https://chrome.google.com/webstore/detail/onboardor/${process.env.EXTENSION_ID}`, "_blank")
        }
      />
    </Container>
    <Absolute style={{ width: "100%", height: 300, bottom: "-4%" }} zIndex={-1}>
      <BackgroundBlue height="100%" width="100%" style={{ transform: "rotateX(180deg)" }} />
    </Absolute>
  </Relative>
);

export default LandingPage;
