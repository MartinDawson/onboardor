import { Box } from "grid-styled";
import React from "react";
import { Container, Text, } from "rebass";
import { FieldArray } from "redux-form";
import Button from "../../shared/button/button";
import { IOrganization } from "../organization/organization";
import OnboardingSteps from "./OnboardingSteps";

interface IProps {
  organization: IOrganization;
  handleSubmit: (input: object) => any;
}

const OnboardingCreator = ({
  organization,
  submitOnboardingStep,
  onboardingSteps,
  handleSubmit,
}: IProps) => (
  <Container>
    <Box width={400} mx="auto">
      <Text mb={40}>Create your on-boarding process for {organization.name}</Text>
      <form onSubmit={handleSubmit}>
        <FieldArray
          component={OnboardingSteps}
          name="onboardingSteps"
        />
        <Button>
          Submit on-boarding process
        </Button>
      </form>
    </Box>
  </Container>
);

export default OnboardingCreator;
