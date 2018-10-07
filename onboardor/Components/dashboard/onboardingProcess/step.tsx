import React from "react";
import styled from "styled-components";
import { Button as RebassButton, Box, Text, ButtonTransparent, Flex, Modal } from "rebass";
import { PortalWithState } from "react-portal";
import ViewOverlay from "../../shared/viewOverlay";
import { IOrganization } from "../organization/organization";
import Cross from "../../../wwwroot/assets/cross.svg";

const StepButton = styled(RebassButton)`
  width: 100%;
  margin: 5px 0;
  padding: 7px;
  color: initial;
  background-color: white;

  &:focus {
    box-shadow: 0 0 0 2px #efefef;
  }
`;

const IssueModal = styled(Modal)`
  top: 45%;
  z-index: 2001;
  width: 1066px;
  padding: 0;
`;

const CloseSvg = styled(Cross)`
  fill: #404040;
`;

const IssueHeader = styled(Box)`
  font-size: 18px;
  background-color: #efefef;
  border-bottom: solid 1px #d6d6d6;
  display: flex;
`;

export interface IStep {
  id: string;
  name: string;
  description?: string;
  isClosed: boolean;
}

interface IProps {
  name: string;
  stepOnClick: () => void;
  closeModal: (closePortal: () => void) => void;
  issueContent: Element;
  organization: IOrganization;
  issueNumber: number;
  issueUrl: string;
}

const Step = ({
  name,
  stepOnClick,
  issueContent,
  organization,
  issueNumber,
  issueUrl,
  closeModal,
}: IProps) => (
  <PortalWithState>
    {({ openPortal, portal, closePortal }) => (
      <React.Fragment>
        <StepButton onClick={() => stepOnClick(openPortal)}>
        <Box bg="white" px="8px" py="5px">
          <Flex alignItems="center">
            <Text>{name}</Text>
          </Flex>
        </Box>
      </StepButton>
      {portal(
        <React.Fragment>
          <IssueModal>
            <IssueHeader px={15} py={10}>
              <a href={issueUrl}>{organization.name}/__onboarding__#{issueNumber}: {name}</a>
              <ButtonTransparent p="5px" ml="auto" onClick={() => closeModal(closePortal)}>
                <CloseSvg />
              </ButtonTransparent>
            </IssueHeader>
            <Box
              px={25}
              pb={20}
              pt={30}
            >
              <div ref={(nodeElement) => nodeElement && nodeElement.appendChild(issueContent)} />
            </Box>
          </IssueModal>
          <ButtonTransparent onClick={() => closeModal(closePortal)}>
            <ViewOverlay />
          </ButtonTransparent>
        </React.Fragment>
      )}
      </React.Fragment>
    )}
  </PortalWithState>
);

export default Step;
