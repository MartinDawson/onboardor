import NavLink from "./navLink";
import { graphql } from "react-relay";
import { compose, branch, renderComponent, flattenProp } from "recompose";
import oAuthNavLink from "./oAuthNavLink";
import { fragment } from "relay-compose";

const fragments = graphql`
  fragment navLinkContainer_navLink on Query {
    setup(
      redirectUrl: $redirectUrl
    )
  }
`;

interface IProps {
  setup: string;
}

const NavLinkContainer = compose(
  fragment(fragments),
  flattenProp('navLink'),
  branch(
    (props: IProps) => !!props.setup,
    renderComponent(oAuthNavLink),
  ),
)((NavLink));

export default NavLinkContainer;
