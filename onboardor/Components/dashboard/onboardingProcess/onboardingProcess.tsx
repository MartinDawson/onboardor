import React from "react";
import { Container, Row, Text, Modal, Box, BackgroundImage, Subhead, } from "rebass";
import { Flex } from "grid-styled";
import { IOrganization } from "../organization/organization";
import styled from "styled-components";
import EmptyPipeline from "./emptyPipelineContainer";
import ClosedPipeline from "./closedPipeline";
import Pipeline from "./pipelineContainer";
import Button from "../../shared/button/button";
import SavedOnboardingProcess from "./savedOnboardingProcess";
import { PortalWithState } from "react-portal";
import AddOnboardingProcessForm from "./AddOnboardingProcessForm";
import { cardMargin, nameMargin, SelectCard } from "../../select/styles";
import SelectOnboardingProcessForm from "./SelectOnboardingProcessForm";

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
      Select a team member to start onboarding
    </Text>
    <PortalWithState closeOnEsc={true}>
      {({ openPortal, closePortal, portal }) => (
        <React.Fragment>
          <Flex flexWrap="wrap">
            {organization.members.map((member) => (
              <React.Fragment key={member.id}>
                <SelectCard
                  m={cardMargin}
                  onClick={openPortal}
                >
                  <BackgroundImage width={200} src={member.avatarUrl} ratio={1} />
                  <Subhead textAlign="center" mt={nameMargin}>{member.name}</Subhead>
                </SelectCard>
                {portal(
                  <Modal top="30%">
                    <Text mb={20}>
                      Select one of your saved onboarding processes to
                      begin onboarding this team member.
                    </Text>
                    <SelectOnboardingProcessForm
                      processes={organization.onboardingProcesses}
                      cancelOnClick={closePortal}
                    />
                  </Modal>
                )}
              </React.Fragment>
            ))}
          </Flex>
        </React.Fragment>
      )}
    </PortalWithState>
    <Text fontSize={14}>
      Once you have configured your onboarding process be sure to save it so it can be
      re-used between team members.
    </Text>
    <PortalWithState closeOnEsc={true} closeOnOutsideClick={true}>
      {({ openPortal, closePortal, portal }) => (
        <React.Fragment>
          <Button my={10} onClick={openPortal}>
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
    <Box my={20}>
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
    </Box>
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
