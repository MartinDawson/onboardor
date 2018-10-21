import React from "react";
import { Container, Row, Text } from "rebass";
import styled from "styled-components";
import EmptyPipeline from "./emptyPipelineContainer";
import ClosedPipeline from "./closedPipeline";
import Pipeline from "./pipelineContainer";
import { IMember } from "../member/member";
import { IOrganization } from "../organization/organization";
import Button from "../../shared/button/button";

interface IProps {
  member: IMember;
  organization: IOrganization;
  removeProcessOnClick: () => void;
}

const PipelineRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
  height: 700px;
`;

const MemberOnboardingProcess = ({
  member,
  organization,
  removeProcessOnClick,
}: IProps) => {debugger; return (
  <Container maxWidth="100%">
    <Text mt={20} mb={10} fontSize={20}>
      <Text is="span" display="inline" fontWeight="bold">
        {member.name}
      </Text> on-boarded by {member.onboardingProcess.name}
    </Text>
    <Button mb={40} onClick={removeProcessOnClick}>
      Remove this process for {member.name}
    </Button>
    <PipelineRow>
      {member.onboardingProcess.onboardingPipelines.map((pipeline, i) =>
        <Pipeline
          key={pipeline.id}
          form={`pipeline_${i}`}
          pipeline={pipeline}
          organization={organization}
          member={member}
        />
      )}
      <ClosedPipeline
        closedSteps={member.onboardingProcess.closedSteps}
        member={member}
        organization={organization}
      />
      <EmptyPipeline
        organizationId={organization.organizationId}
        memberId={member.memberId}
      />
    </PipelineRow>
  </Container>
);}

export default MemberOnboardingProcess;
