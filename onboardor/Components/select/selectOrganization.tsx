import { Flex } from "grid-styled";
import React from "react";
import { BackgroundImage, Subhead, Text } from "rebass";
import LinkButton from "../shared/button/linkButton";
import { IMember } from "./selectTeamMembers";
import { cardMargin, nameMargin, SelectCard } from "./styles";

export interface IOrganization {
  id: string;
  name: string;
  avatarUrl: string;
  members: IMember[];
}

export interface IProps {
  organizations: IOrganization[];
  selectedOrganizationId: string | null;
  selectOrganization: (organization: IOrganization) => void;
}

const SelectOrganization = ({
  organizations,
  selectedOrganizationId,
  selectOrganization,
}: IProps) => (
  <Flex alignItems="center" flexDirection="column" pt={30}>
    <Text my={30}>
      Select the organization that you want to start onboarding for.
    </Text>
    <Flex flexWrap="wrap">
      {organizations.map((organization) => {
        const selected = organization.id === selectedOrganizationId;

        return (
          <Flex key={organization.id} flexDirection="column" alignItems="center">
            <SelectCard
              key={organization.id}
              m={cardMargin}
              onClick={() => selectOrganization(organization)}
              selected={selected}
            >
              <BackgroundImage width={200} src={organization.avatarUrl} ratio={1} />
              <Subhead textAlign="center" mt={nameMargin}>{organization.name}</Subhead>
            </SelectCard>
          </Flex>
        );
      })}
    </Flex>
    <LinkButton
      to={`/select/teamMembers?organizationId=${selectedOrganizationId}`}
      mx="auto"
      mt={50}
      fontSize={25}
      display="block"
    >
      Continue
    </LinkButton>
  </Flex>
);

export default SelectOrganization;
