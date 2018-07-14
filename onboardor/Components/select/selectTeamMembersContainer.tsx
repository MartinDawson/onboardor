
import { graphql } from "react-relay";
import { compose, withHandlers, withStateHandlers } from "recompose";

import selectTeamMembers, { IMember } from "./selectTeamMembers";
import setOnboardingMembersMutation from "./setOnboardingMembersMutation";

// const query = graphql`
//   query selectTeamMembersContainerQuery(
//     $organizationId: ID!
//   ) {
//     node(
//       id: $organizationId
//     ) {
//       name
//       members {
//         id
//         name
//         avatarUrl
//         isBeingOnboarded
//       }
//     }
//   }
// `;

interface IState {
  selectedTeamMembers: IMember[];
}

const handlers = {
  proceed: ({ router, selectedTeamMembers }: IState) => () => {
    setOnboardingMembersMutation({ memberIds: selectedTeamMembers.map((x) => x.id) });

    router.push("/");
  }
};

const stateHandlers = {
  selectTeamMember: ({ selectedTeamMembers }: IState) => (teamMember: IMember) => {
    const existingTeamMemberIndex = selectedTeamMembers.findIndex(
      (selectedTeamMember) => selectedTeamMember.id === teamMember.id
    );
    const newSelectedTeamMembers = [...selectedTeamMembers];

    if (existingTeamMemberIndex === -1) {
      newSelectedTeamMembers.push(teamMember);
    } else {
      newSelectedTeamMembers.splice(existingTeamMemberIndex, 1);
    }

    return { selectedTeamMembers: newSelectedTeamMembers };
  },
};

const Component = compose(
  withStateHandlers<IState, {}>({
    selectedTeamMembers: [],
  }, stateHandlers),
  withHandlers(handlers),
)(selectTeamMembers);

export const routeConfig = {
  Component,
};

export default Component;
