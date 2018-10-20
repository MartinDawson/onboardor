import React from "react";
import { Container, Row, Text } from "rebass";
import styled from "styled-components";
import EmptyPipeline from "./emptyPipelineContainer";
import Pipeline from "./pipelineContainer";
import { IOrganization } from "../organization/organization";
import { IPipeline } from "./pipeline";
import { IStep } from "./step";

export interface IProcess {
  id: number;
  onboardingProcessId: number;
  name: string;
  organization: IOrganization;
  onboardingPipelines: IPipeline[];
  closedSteps: IStep[];
}

interface IProps {
  onboardingProcess: IProcess;
  organization: IOrganization;
}

const PipelineRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
  height: 700px;
`;

const SavedOnboardingProcess = ({
  onboardingProcess,
  organization,
}: IProps) => (
  <Container maxWidth="100%">
    <Text mt={20} mb={40} fontSize={20}>
      <Text is="span" display="inline" fontWeight="bold">
        {onboardingProcess.name}
      </Text> on-boarding process
    </Text>
    <PipelineRow>
      {onboardingProcess.onboardingPipelines.map((pipeline, i) =>
        <Pipeline
          key={pipeline.id}
          form={`pipeline_${i}`}
          pipeline={pipeline}
          organization={organization}
        />
      )}
      <EmptyPipeline
        organizationId={organization.organizationId}
      />
    </PipelineRow>
  </Container>
);

export default SavedOnboardingProcess;
