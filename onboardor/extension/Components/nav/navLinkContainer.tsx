import NavLink from "../nav/navLink";
import React from "react";
import ReactDOM from "react-dom";
import "../../../Components/shared/setupErrorLogging";
import { Provider as RebassProvider } from "rebass";
import theme from "../../../Components/shared/utilities/theme";
import { graphql } from "react-relay";
import { compose, branch, renderComponent } from "recompose";
import { queryRenderer } from "relay-compose";
import oAuthNavLink from "./oAuthNavLink";

const query = graphql`
  query navLinkContainerQuery {
    setup
  }
`;

const getContainer = () => {
  const container = document.createElement("div");
  const element = document.querySelectorAll(".js-repo-nav > span:last-of-type")[0];

  element.insertAdjacentElement("afterend", container);

  return container;
}

const observer = new MutationObserver(() => {
  // if (!document.getElementById("onboardor-nav-link")) {
  //   renderNav();
  // }
});

observer.observe(document, {
  subtree: true,
  childList: true,
});

interface IProps {
  setup: string;
}

const NavLinkContainer = compose(
  queryRenderer(query),
  branch(
    (props: IProps) => !!props.setup,
    renderComponent(oAuthNavLink),
  )
)(NavLink);

const renderNav = () => {
  ReactDOM.render(
    <RebassProvider
      theme={theme}
    >
      <NavLinkContainer />
    </RebassProvider>,
  getContainer());
};

export default renderNav;
