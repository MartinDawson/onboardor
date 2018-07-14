import { Flex } from "grid-styled";
import React from "react";
import { BackgroundImage, Subhead, Text } from "rebass";
import { IOrganization } from "../select/selectOrganization";
import { IMember } from "../select/selectTeamMembers";
import { cardMargin, nameMargin, SelectCard } from "../select/styles";

interface IProps {
  organization: IOrganization;
}

const Dashboard = ({
  organization,
}: IProps) => (
  <div>
    {organization.name}
    <Text my={30}>
      Your employees currently being onboarded.
    </Text>

    <Flex flexWrap="wrap">
      {organization.members.map((member) => (
        <SelectCard
          key={member.id}
          m={cardMargin}
        >
          <BackgroundImage width={200} src={member.avatarUrl} ratio={1} />
          <Subhead textAlign="center" mt={nameMargin}>{member.name}</Subhead>
        </SelectCard>
      ))}
    </Flex>
  </div>
);

export default Dashboard;
