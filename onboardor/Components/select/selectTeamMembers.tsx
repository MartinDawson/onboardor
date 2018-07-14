import { Flex } from "grid-styled";
import React from "react";
import { BackgroundImage, Subhead, Text } from "rebass";
import Button from "../shared/button/button";
import { IOrganization } from "./selectOrganization";
import { cardMargin, nameMargin, SelectCard } from "./styles";

export interface IMember {
  id: number;
  name: string;
  avatarUrl: string;
  isBeingOnboarded: boolean;
  selected: boolean;
}

export interface IProps {
  organization: IOrganization;
  selectTeamMember: (teamMember: IMember) => void;
  proceed: () => void;
  selectedTeamMembers: IMember[];
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
    <Flex flexWrap="wrap">
      {organization.members.map((member) => {
        const selected = selectedTeamMembers.some((selectedTeamMember) => selectedTeamMember.id === member.id);

        return (
          <SelectCard
            key={member.id}
            m={cardMargin}
            onClick={() => selectTeamMember(member)}
            selected={selected}
          >
            <BackgroundImage width={200} src={member.avatarUrl} ratio={1} />
            <Subhead textAlign="center" mt={nameMargin}>{member.name}</Subhead>
          </SelectCard>
        );
      })}
    </Flex>
    <Button mx="auto" mt={50} fontSize={25} display="block" onClick={proceed}>
      Continue
    </Button>
  </Flex>
);

export default SelectTeamMembers;
