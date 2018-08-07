import React from "react";
import { Container, Text, Row, Column, Box } from "rebass";
import { IOrganization } from "../organization/organization";
import styled from "styled-components";
import Button from "../../shared/button/button";

interface IProps {
  organization: IOrganization;
}

const PipelineRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
  height: 700px;
`;

const PipelineColumn = styled(Column)`
  background-color: #F4F4F4;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 5px;
  max-width: 262px;
`;

const Step = styled.button`
  width: 100%;
  border-radius: 4px;
  text-align: left;
  margin: 5px 0;
`;

const OnboardingProcess = ({
  organization,
}: IProps) => (
  <Container maxWidth="100%">
    <Text mt={20} mb={40} fontSize={20}>
      <Text is="span" display="inline" fontWeight="bold">
        {organization.name}
      </Text> on-boarding process
    </Text>
    <PipelineRow>
      {organization.onboardingPipelines.map((pipeline) => (
        <PipelineColumn key={pipeline.id} p={16}>
          <Box pb={16}>
            <Text fontWeight="bold" fontSize={18}>{pipeline.name}</Text>
          </Box>
          {pipeline.onboardingSteps.map((step) => (
            <Step key={step.id}>
              <Box bg="white" p={10} br={4}>
                {step.name}
              </Box>
            </Step>
          ))}
        </PipelineColumn>
      ))}
      <PipelineColumn px={0}>
        <Button style={{ width: "100%" }}>Add a process...</Button>
      </PipelineColumn>
    </PipelineRow>
  </Container>
);

export default OnboardingProcess;
