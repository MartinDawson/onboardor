import React from "react";
import { Container, Text, Row } from "rebass";
import { IOrganization } from "../organization/organization";
import styled from "styled-components";
import { InjectedFormProps } from "redux-form";
import EmptyPipeline from "./emptyPipelineContainer";
import ClosedPipeline from "./closedPipeline";
import Pipeline from "./pipelineContainer";

interface IProps extends InjectedFormProps {
  organization: IOrganization;
  addPipeline: () => void;
  removePipeline: (id: number) => void;
  editPipeline: (id: number) => void;
  togglePipeline: () => void;
  isAddingPipeline: boolean;
  removingNameConfirmValue: string;
}

const PipelineRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
  height: 700px;
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
      {organization.onboardingPipelines.map((pipeline, i) =>
        <Pipeline
          key={pipeline.id}
          form={`pipeline_${i}`}
          pipeline={pipeline}
          organizationName={organization.name}
        />
      )}
      <ClosedPipeline onboardingSteps={organization.onboardingSteps} />
      <EmptyPipeline organizationId={organization.organizationId} />
    </PipelineRow>
  </Container>
);

export default OnboardingProcess;
