import { Flex } from "grid-styled";
import React from "react";
import { BackgroundImage, Subhead, Text } from "rebass";
import Button from "../shared/button/button";
import { IOrganization } from "./selectOrganization";
import { cardPadding, nameMargin, SelectCard } from "./styles";

export interface IMember {
  id: string;
  name: string;
  avatarUrl: string;
  selected: boolean;
}

export interface IProps {
  organization: IOrganization;
  selectTeamMember: (teamMember: IMember) => void;
  proceed: () => void;
  selectedTeamMembers: string[];
}

const SelectTeamMembers = ({
  organization,
  selectTeamMember,
  proceed,
  selectedTeamMembers,
}: IProps) => (
  <Flex alignItems="center" flexDirection="column" pt={30}>
    <Text my={30}>
      Select your team members that you want to start onboarding for <Text is="span" fontWeight="bold">
        {organization.name}
      </Text>.
    </Text>
    <Flex mx={-cardPadding} flexWrap="wrap">
      {organization.members.map((member) => {
        const selected = selectedTeamMembers.some((id) => id === member.id);

        return (
          <SelectCard
            key={member.id}
            p={cardPadding}
            onClick={() => selectTeamMember(member)}
            selected={selected}
          >
            <BackgroundImage src={member.avatarUrl} ratio={1} />
            <Subhead mt={nameMargin}>{member.name}</Subhead>
          </SelectCard>
        );
      })}
    </Flex>
    <Button mx="auto" mt={50} style={{ fontSize: 25, display: "block"  }} onClick={proceed}>
      Continue
    </Button>
  </Flex>
);

export default SelectTeamMembers;
