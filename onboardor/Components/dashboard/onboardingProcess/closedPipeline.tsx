import React from "react";
import { Text, Box } from "rebass";
import { Flex } from "grid-styled";
import { PipelineColumn } from "./pipeline";
import Step from "./stepContainer";
import { IStep } from "./step";
import { IMember } from "../member/member";

interface IProps {
  closedSteps: IStep[];
  member: IMember;
}

const ClosedPipeline = ({
  closedSteps,
  member,
}: IProps) => (
  <PipelineColumn p={16}>
    <Box pb={16}>
      <Flex alignItems="center">
        <Text fontWeight="bold" fontSize={18}>Closed</Text>
      </Flex>
    </Box>
    {closedSteps.map((closedStep) => (
      <Step
        key={closedStep.id}
        step={closedStep}
        member={member}
      />
    ))}
  </PipelineColumn>
);

export default ClosedPipeline;
