import React from "react";
import { graphql } from "react-relay";
import { branch, compose, renderComponent, withStateHandlers } from "recompose";

import LandingPage from "../landingPage/landingPage";
import Dashboard from "./dashboard";
import SelectOrganization, { IOrganization, IProps as IOrganizationProps } from "./selectOrganization";
import SelectTeamMembers, { IMember, IProps as IMemberProps } from "./selectTeamMembers";
import { debug } from "util";

const query = graphql`
  query dashboardContainerQuery {
    organizations {
      id
      name
      avatarUrl
      members {
        id
        name
        avatarUrl
      }
    }
  }
`;

interface IState {
  selectedTeamMembers: string[];
  selectedOrganization: string;
  setupStageIndex: number;
}

const stateHandlers = {
  selectOrganization: ({ selectedOrganization }: IState) => (organization: IOrganization) => ({
    selectedOrganization: selectedOrganization ? null : organization.id,
  }),
  selectTeamMember: ({ selectedTeamMembers }: IState) => (teamMember: IMember) => {
    const teamMemberIndex = selectedTeamMembers.findIndex((id) => id === teamMember.id);
    const newSelectedTeamMembers = [...selectedTeamMembers];

    if (teamMemberIndex === -1) {
      newSelectedTeamMembers.push(teamMember.id);
    } else {
      newSelectedTeamMembers.splice(teamMemberIndex, 1);
    }

    return { selectedTeamMembers: newSelectedTeamMembers };
  },
  proceed: ({ setupStageIndex }: IState) => () => ({
    setupStageIndex: ++setupStageIndex,
  }),
};

interface IProps extends IOrganizationProps, IMemberProps {}

interface IStageProps extends IProps, IState {
  setupStageIndex: number;
}

const selectTeamMembersFactory = ({ setupStageIndex, ...props }: IStageProps) => {
  const organization = props.organizations.find((orgazniation) => orgazniation.id === props.selectedOrganization);

  const StageComponent = [
    <SelectOrganization key={0} {...props} />,
    <SelectTeamMembers key={1} {...props} organization={organization} />,
  ][setupStageIndex];

  return StageComponent;
};

const Component = compose<IProps, {}>(
  branch(
    (props: IProps) => !props.organizations.length,
    renderComponent(LandingPage),
  ),
  withStateHandlers<IState, {}>({
    selectedTeamMembers: [],
    selectedOrganization: null,
    setupStageIndex: 0,
  }, stateHandlers),
  branch(
    ({ setupStageIndex }: IStageProps) => typeof setupStageIndex === "number",
    renderComponent(selectTeamMembersFactory),
  )
)(Dashboard);

export const routeConfig = {
  Component,
  query,
};

export default Dashboard;
