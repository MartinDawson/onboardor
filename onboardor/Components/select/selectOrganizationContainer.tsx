import { graphql } from "react-relay";
import { compose, withStateHandlers } from "recompose";

import SelectOrganization, { IOrganization, IProps } from "./selectOrganization";

const query = graphql`
  query selectOrganizationContainerQuery {
    organizations {
      id
      name
      avatarUrl
    }
  }
`;

interface IState {
  selectedOrganizationId: string | null;
}

const stateHandlers = {
  selectOrganization: ({ selectedOrganizationId }: IState) => (organization: IOrganization) => ({
    selectedOrganizationId: selectedOrganizationId ? null : organization.id,
  }),
};

const Component = compose(
  withStateHandlers<IState, {}>({
    selectedOrganizationId: null,
  }, stateHandlers),
)(SelectOrganization);

export const routeConfig = {
  query,
  Component,
};

export default Component;
