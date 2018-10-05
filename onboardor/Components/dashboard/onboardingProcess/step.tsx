import React from "react";
import styled from "styled-components";
import { Box, Text, Flex } from "rebass";
import { InjectedFormProps } from "redux-form";
import { IOrganization } from "../organization/organization";

const StepLink = styled.a`
  width: 100%;
  border-radius: 4px;
  text-align: left;
  margin: 5px 0;
  padding: 0;
  display: block;
  color: initial;

  &:hover {
    text-decoration: none;
  }
`;

export interface IStep {
  id: string;
  name: string;
  description?: string;
}

interface IProps extends InjectedFormProps<FormData> {
  name: string;
  issueNumber: number;
  organization: IOrganization;
}

const Step = ({
  name,
  issueNumber,
  organization,
}: IProps) => (
  <StepLink href={`${window.location.origin}/${organization.name}/__onboarding__/issues/${issueNumber}`}>
    <Box bg="white" px="8px" py="5px">
      <Flex alignItems="center">
        <Text>{name}</Text>
      </Flex>
    </Box>
  </StepLink>
);

export default Step;
