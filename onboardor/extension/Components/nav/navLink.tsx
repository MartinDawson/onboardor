import React from "react";
import styled from "styled-components";
import { IStyleProps } from "../../../Components/types";
import classnames from "classnames";

interface IState {
  selected: boolean;
}

interface IAnchorProps extends IStyleProps {
  selected: boolean;
}

const Anchor = styled.a`
  ${(props: IAnchorProps) => props.selected && (
    `&.reponav-item.selected {
      border-color: ${props.theme.colors.primary} rgb(229, 229, 229) transparent;
    }`
  )}
`;

const id = "onboardor-nav-link";

class NavLink extends React.Component<{}, IState> {
  constructor(props: {}, public observer: MutationObserver) {
    super(props);

    this.state = {
      selected: false,
    };
  }
  componentDidMount() {
    this.observer = new MutationObserver(() => {
      if (window.location.hash === "#onboardor") {
        const selectedItem = document.querySelector(`.reponav-item.selected:not([id='${id}'])`);

        if (selectedItem) {
          selectedItem.classList.remove("selected");
        }

        this.setState({ selected: true });
      } else {
        this.setState({ selected: false });
      }
    });

    this.observer.observe(document, {
      subtree: true,
      childList: true,
    })
  }
  componentWillUnmount() {
    this.observer.disconnect();
  }
  render() {
    return (
      <Anchor
        id={id}
        href="#onboardor"
        className={classnames("reponav-item", this.state.selected && "selected")}
        selected={this.state.selected}
      >
        onboardor
      </Anchor>
    );
  }
}

export default NavLink;
