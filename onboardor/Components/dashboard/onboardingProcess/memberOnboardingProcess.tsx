import React from "react";
import { Container, Row, Text } from "rebass";
import styled from "styled-components";
import EmptyPipeline from "./emptyPipelineContainer";
import ClosedPipeline from "./closedPipeline";
import Pipeline from "./pipelineContainer";
import { IMember } from "../member/member";

interface IProps {
  member: IMember;
}

const PipelineRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
  height: 700px;
`;

const MemberOnboardingProcess = ({
  member,
}: IProps) => (
  <Container maxWidth="100%">
    <Text mt={20} mb={40} fontSize={20}>
      <Text is="span" display="inline" fontWeight="bold">
        {member.name}
      </Text> on-boarding process
    </Text>
    <PipelineRow>
      {member.onboardingProcess.onboardingPipelines.map((pipeline, i) =>
        <Pipeline
          key={pipeline.id}
          form={`pipeline_${i}`}
          pipeline={pipeline}
          organizationName={member.onboardingProcess.organization.name}
          member={member}
        />
      )}
      <ClosedPipeline
        closedSteps={member.onboardingProcess.closedSteps}
        member={member}
      />
      <EmptyPipeline
        organizationId={member.onboardingProcess.organization.organizationId}
        memberId={member.memberId}
      />
    </PipelineRow>
  </Container>
);

export default MemberOnboardingProcess;
