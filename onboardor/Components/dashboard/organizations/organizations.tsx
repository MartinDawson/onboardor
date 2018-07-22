import { Link } from "found";
import { Flex } from "grid-styled";
import React from "react";
import { BackgroundImage, Subhead, Text } from "rebass";
import { nameMargin, SelectCard } from "../../select/styles";
import { IRoute } from "../../types";
import { IOrganization } from "../organization/organization";

interface IProps extends IRoute {
  organizations: IOrganization[];
}

const Organizations = ({
  organizations,
  match,
}: IProps) => (
  <div>
    <Text my={30}>
      Choose an organization
    </Text>

    <Flex flexWrap="wrap">
      {organizations.map((organization) => (
          <Link
            key={organization.id}
            to={`${match.location.pathname}/organization/${organization.id}`}
          >
            <SelectCard
              m={cardMargin}
            >
              <BackgroundImage width={200} src={organization.avatarUrl} ratio={1} />
              <Subhead textAlign="center" mt={nameMargin}>{organization.name}</Subhead>
            </SelectCard>
          </Link>
      ))}
    </Flex>
  </div>
);

export default Organizations;
