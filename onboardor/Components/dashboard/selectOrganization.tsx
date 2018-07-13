import { Box, Flex } from "grid-styled";
import React from "react";
import { BackgroundImage, Subhead, Text } from "rebass";
import Button from "../shared/button/button";
import { IMember } from "./selectTeamMembers";
import { cardPadding, nameMargin, SelectCard } from "./styles";

export interface IOrganization {
  id: string;
  name: string;
  avatarUrl: string;
  members: IMember[];
}

export interface IProps {
  organizations: IOrganization[];
  proceed: () => void;
  selectedOrganization: string;
  selectOrganization: (organization: IOrganization) => void;
}

const SelectOrganization = ({
  organizations,
  proceed,
  selectedOrganization,
  selectOrganization,
}: IProps) => (
  <Flex alignItems="center" flexDirection="column" pt={30}>
    <Text my={30}>
      Select the organization that you want to start onboarding for.
    </Text>
    <Flex mx={-cardPadding} flexWrap="wrap">
      {organizations.map((organization) => {
        const selected = organization.id === selectedOrganization;

        return (
          <div key={organization.id}>
            <Flex flexDirection="column" alignItems="center">
              <SelectCard
                key={organization.id}
                p={cardPadding}
                onClick={() => selectOrganization(organization)}
                selected={selected}
              >
                <BackgroundImage src={organization.avatarUrl} ratio={1} />
                <Subhead mt={nameMargin}>{organization.name}</Subhead>
              </SelectCard>
            </Flex>
          </div>
        );
      })}
    </Flex>
    <Button mx="auto" mt={50} style={{ fontSize: 25, display: "block" }} onClick={proceed}>
      Continue
    </Button>
  </Flex>
);

export default SelectOrganization;
