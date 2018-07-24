import { Box } from "grid-styled";
import React from "react";
import { Container, Text, } from "rebass";
import { FieldArray, FormProps, InjectedFormProps } from "redux-form";
import Button from "../../shared/button/button";
import { IOrganization } from "../organization/organization";
import OnboardingSteps from "./OnboardingSteps";

interface IProps extends InjectedFormProps {
  organization: IOrganization;
}

const OnboardingCreator = ({
  organization,
  handleSubmit,
}: IProps) => (
  <Container>
    <Box width={600} mx="auto">
      <Text my={40} fontSize={20} textAlign="center">Create your on-boarding process for
        <Text is="span" display="inline" fontWeight="bold"> {organization.name}</Text>
      </Text>
      <form onSubmit={handleSubmit}>
        <FieldArray
          component={OnboardingSteps}
          name="onboardingSteps"
          rerenderOnEveryChange
        />
        <Button mx="auto" mt={35} style={{ display: "block" }}>
          Submit on-boarding process
        </Button>
      </form>
    </Box>
  </Container>
);

export default OnboardingCreator;
