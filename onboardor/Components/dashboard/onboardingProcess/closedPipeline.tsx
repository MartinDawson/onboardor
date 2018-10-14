import React from "react";
import { Text, Box } from "rebass";
import { Flex } from "grid-styled";
import { PipelineColumn } from "./pipeline";
import Step from "./stepContainer";
import { IStep } from "./step";
import { IMember } from "../member/member";
import { IOrganization } from "../organization/organization";

interface IProps {
  closedSteps: IStep[];
  member: IMember;
  organization: IOrganization;
}

const ClosedPipeline = ({
  closedSteps,
  member,
  organization,
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
        organization={organization}
      />
    ))}
  </PipelineColumn>
);

export default ClosedPipeline;
