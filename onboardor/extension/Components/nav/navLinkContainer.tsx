import NavLink from "./navLink";
import { graphql } from "react-relay";
import { compose, branch, renderComponent } from "recompose";
import oAuthNavLink from "./oAuthNavLink";

// const observer = new MutationObserver(() => {
//   if (!document.getElementById("onboardor-nav-link")) {
//     renderNav();
//   }
// });

// observer.observe(document, {
//   subtree: true,
//   childList: true,
// });

const query = graphql`
  query navLinkContainerQuery {
    setup
  }
`;

interface IProps {
  setup: string;
}

const NavLinkContainer = compose(
  branch(
    (props: IProps) => !!props.setup,
    renderComponent(oAuthNavLink),
  )
)((NavLink));

export const routeConfig = {
  Component: NavLinkContainer,
  query,
};

export default NavLinkContainer;
