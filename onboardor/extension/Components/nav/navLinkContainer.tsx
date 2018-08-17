import NavLink from "./navLink";
import { graphql } from "react-relay";
import { compose, branch, renderComponent, flattenProp, withStateHandlers, withProps } from "recompose";
import oAuthNavLink from "./oAuthNavLink";
import { fragment } from "relay-compose";

// const observer = new MutationObserver(() => {
//   if (!document.getElementById("onboardor-nav-link")) {
//     renderNav();
//   }
// });

// observer.observe(document, {
//   subtree: true,
//   childList: true,
// });

const id = "onboardor-nav-link";

const fragments = graphql`
  fragment navLinkContainer_navLink on Query {
    setup
  }
`;

interface IProps {
  setup: string;
}

interface IState {
  selected: boolean;
}

const stateHandlers = {
  onClick: ({ selected }: IState) => () => {
    const selectedItem = document.querySelector(`.reponav-item.selected:not([id='${id}'])`);

    if (selectedItem) {
      selectedItem.classList.remove("selected");
    }

    return {
      selected: !selected,
    };
  },
};

const NavLinkContainer = compose(
  fragment(fragments),
  flattenProp('navLink'),
  branch(
    (props: IProps) => !!props.setup,
    renderComponent(oAuthNavLink),
  ),
  withStateHandlers({ selected: false }, stateHandlers),
  withProps({
    id,
  }),
)((NavLink));

export default NavLinkContainer;
