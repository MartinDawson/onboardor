import React from "react";
import { Container, Row, Text, Modal } from "rebass";
import { IOrganization } from "../organization/organization";
import styled from "styled-components";
import EmptyPipeline from "./emptyPipelineContainer";
import ClosedPipeline from "./closedPipeline";
import Pipeline from "./pipelineContainer";
import Button from "../../shared/button/button";
import SavedOnboardingProcess from "./savedOnboardingProcessContainer";
import { PortalWithState } from "react-portal";
import AddOnboardingProcessForm from "./AddOnboardingProcessForm";

interface IProps {
  organization: IOrganization;
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
    <Text fontSize={14}>
      Once you have configured your onboarding process be sure to save it so it can be
      re-used between team members.
    </Text>
    <PortalWithState closeOnEsc={true} closeOnOutsideClick={true}>
      {({ openPortal, closePortal, portal }) => (
        <React.Fragment>
          <Button onClick={openPortal}>
            Save Onboarding process
          </Button>
          {portal(
            <Modal top="30%">
              <AddOnboardingProcessForm
                organization={organization}
                cancelOnClick={closePortal}
              />
            </Modal>
          )}
        </React.Fragment>
      )}
    </PortalWithState>
    {organization.onboardingProcesses.length > 0 ? (
      <Text fontSize={16}>
        Your saved onboarding processes:
      </Text>)
      : null
    }
    {organization.onboardingProcesses.map((process) => (
      <SavedOnboardingProcess
        key={process.id}
        process={process}
      />
    ))}
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
