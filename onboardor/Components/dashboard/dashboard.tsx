import { Flex } from "grid-styled";
import React from "react";
import { Text, Card, Subhead, BackgroundImage, Image } from "rebass";

interface IProps {
  organizations: [{
    id: string
    name: string
    avatarUrl: string
    members: [{
      id: string
      name: string
      avatarUrl: string,
    }],
  }];
}

const memberPadding = 7;
const nameMargin = 7;

const Dashboard = ({
  organizations,
}: IProps) => (
  <Flex justifyContent="center" pt={30}>
    {organizations.map((organization) => (
      <div key={organization.id}>
        <Flex flexDirection="column" alignItems="center">
          <Text fontWeight="bold" mb={nameMargin}>{organization.name}</Text>
          <Image width={130} src={organization.avatarUrl} />
        </Flex>
        <Text my={30}>
          Select your team members that you want to start onboarding for <Text is="span" fontWeight="bold">{organization.name}</Text>.
        </Text>
        <Flex mx={-memberPadding} flexWrap>
          {organization.members.map((member) => (
            <Card key={member.id} p={memberPadding}>
              <BackgroundImage src={member.avatarUrl} ratio={1} />
              <Subhead mt={nameMargin}>{member.name}</Subhead>
            </Card>
          ))}
        </Flex>
      </div>
    ))}
  </Flex>
);

export default Dashboard;
