import { Link } from "found";
import { Flex } from "grid-styled";
import React from "react";
import { BackgroundImage, Subhead, Text } from "rebass";
import { cardMargin, nameMargin, SelectCard } from "../../select/styles";
import { IRoute } from "../../types";
import { IMember } from "../member/member";

interface IProps extends IRoute {
  members: IMember[];
}

export interface IOrganization {
  id: string;
  name: string;
  avatarUrl: string;
  members: IMember[];
}

const Organization = ({
  members,
  match,
}: IProps) => (
  <div>
    <Text my={30}>
      Click on any team member to see their performance.
    </Text>

    <Flex flexWrap="wrap">
      {members.map((member) => (
          <Link
            key={member.id}
            to={`${match.location.pathname}/teamMember/${member.id}`}
          >
            <SelectCard
              m={cardMargin}
            >
              <BackgroundImage width={200} src={member.avatarUrl} ratio={1} />
              <Subhead textAlign="center" mt={nameMargin}>{member.name}</Subhead>
            </SelectCard>
          </Link>
      ))}
    </Flex>
  </div>
);

export default Organization;
