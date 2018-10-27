import React from "react";
import { Container, Row, Text, Modal, Box, BackgroundImage, Subhead, Image } from "rebass";
import { Flex } from "grid-styled";
import { IOrganization } from "../organization/organization";
import styled from "styled-components";
import EmptyPipeline from "./emptyPipelineContainer";
import Pipeline from "./pipelineContainer";
import Button from "../../shared/button/button";
import { PortalWithState } from "react-portal";
import AddOnboardingProcessForm from "./AddOnboardingProcessForm";
import { cardMargin, nameMargin, SelectCard } from "../../select/styles";
import SelectOnboardingProcessForm from "./SelectOnboardingProcessForm";
import { IMember } from "../member/member";
import LinkButton from "../../shared/button/linkButton";
import { IMatch } from "../../types";

interface IProps {
  organization: IOrganization;
  match: IMatch;
  onboardedMemberOnClick: (member: IMember) => void;
}

const PipelineRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
  min-height: 200px;
`;

const OrganizationImage = styled(Image)`
  width: 70px;
  border-radius: 4px;
`;

const OnboardingProcess = ({
  organization,
  onboardedMemberOnClick,
  match,
}: IProps) => {
  const isBeingOnboarded = (member: IMember) =>
    member.onboardingProcesses.some((process) =>
      process.organization !== null &&
      process.organization.organizationId === organization.organizationId
  );

  return (
    <Container maxWidth="100%">
      <Flex justifyContent="center" alignItems="center" mt={20} mb={40}>
        <OrganizationImage src={organization.avatarUrl} mr={20} />
        <Text fontSize={20}>
          <Text is="span" display="inline" fontWeight="bold">
            {organization.name}
          </Text> on-boarding template
        </Text>
      </Flex>
      <Text fontSize={16} mb={10}>
        Create your organizations onboarding template.
      </Text>
      <PipelineRow>
        {organization.onboardingPipelines.filter((pipeline) => !pipeline.onboardingProcess).map((pipeline, i) =>
          <Pipeline
            key={pipeline.id}
            form={`pipeline_${i}`}
            pipeline={pipeline}
            organization={organization}
          />
        )}
        <EmptyPipeline organizationId={organization.organizationId} />
      </PipelineRow>
      <Text fontSize={16} mb={10}>
        Save your onboarding template and give it a name.
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
        {organization.onboardingProcesses.map((process, i) => (
          <React.Fragment key={process.id}>
            {i === 0 && (
              <Text fontSize={20}>
                Your saved onboarding processes:
              </Text>
            )}
            <LinkButton to={`${match.location.pathname}/savedProcess/${process.onboardingProcessId}`}>
              <Text fontSize={17} fontWeight="bold">{process.name}</Text>
            </LinkButton>
          </React.Fragment>
        ))}
      </Box>
      {organization.members.some(isBeingOnboarded) && (
        <Text fontSize={20}>
          Your team members currently being onboarded:
        </Text>
      )}
      <Flex flexWrap="wrap">
        {organization.members.filter(isBeingOnboarded).map((member) => (
          <SelectCard
            key={member.id}
            m={cardMargin}
            onClick={() => onboardedMemberOnClick(member)}
          >
            <BackgroundImage src={member.avatarUrl} ratio={1} />
            <Subhead textAlign="center" mt={nameMargin}>{member.name}</Subhead>
          </SelectCard>
        ))}
      </Flex>
      {organization.members.some((member) => !isBeingOnboarded(member)) && (
        <Text fontSize={16} mb={10}>
          Select one of your team members and give them one of your templates to onboard them.
        </Text>
      )}
      <Flex flexWrap="wrap">
        {organization.members.filter((member) => !isBeingOnboarded(member)).map((member) => (
          <PortalWithState key={member.id} closeOnEsc={true}>
            {({ openPortal, closePortal, portal }) => (
              <React.Fragment>
                <SelectCard
                  m={cardMargin}
                  onClick={openPortal}
                >
                  <BackgroundImage src={member.avatarUrl} ratio={1} />
                  <Subhead textAlign="center" mt={nameMargin}>{member.name}</Subhead>
                </SelectCard>
                {portal(
                  <Modal top="30%">
                    <Text mb={20}>
                      Select one of your saved onboarding processes to
                      begin onboarding this team member.
                    </Text>
                    <SelectOnboardingProcessForm
                      member={member}
                      processes={organization.onboardingProcesses}
                      cancelOnClick={closePortal}
                    />
                  </Modal>
                )}
              </React.Fragment>
            )}
          </PortalWithState>
        ))}
      </Flex>
    </Container>
  );
};

export default OnboardingProcess;
