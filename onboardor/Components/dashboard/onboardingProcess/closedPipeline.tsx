import React from "react";
import { Text, Box } from "rebass";
import { Flex } from "grid-styled";
import { PipelineColumn } from "./pipeline";
import Step from "./stepContainer";
import { IStep } from "./step";

interface IProps {
  onboardingSteps: IStep[];
}

const ClosedPipeline = ({
  onboardingSteps,
}: IProps) => (
  <PipelineColumn p={16}>
    <Box pb={16}>
      <Flex alignItems="center">
        <Text fontWeight="bold" fontSize={18}>Closed</Text>
      </Flex>
    </Box>
    {onboardingSteps.filter((step) => step.isClosed).map((step) => (
      <Step
        key={step.id}
        step={step}
      />
    ))}
  </PipelineColumn>
);

export default ClosedPipeline;
