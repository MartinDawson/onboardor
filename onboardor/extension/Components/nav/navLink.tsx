import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Portal } from "react-portal";
import { Link, withRouter } from "found";
import { IMatch, IStyleProps } from "../../../Components/types";

interface IProps {
  match: IMatch;
  selected: boolean;
  id: string;
}

interface IState {
  selected: boolean;
}

interface IAnchorProps extends IStyleProps {
  selected: boolean;
}

const Anchor = styled(Link)`
  ${(props: IAnchorProps) => props.selected && (
    `&.reponav-item.selected {
      border-color: ${props.theme.colors.primary} rgb(229, 229, 229) transparent;
    }`
  )}
`;

const id = "onboardor-nav-link";

class NavLink extends React.Component<IProps, IState> {
  constructor(props: IProps, public observer: MutationObserver) {
    super(props);

    this.state = {
      selected: false,
    };
  }
  componentWillReceiveProps() {
    if (this.props.match.location.pathname.includes("/onboardor")) {
      const selectedItem = document.querySelector(`.reponav-item.selected:not([id='${id}'])`);

      if (selectedItem) {
        selectedItem.classList.remove("selected");
      }

      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  render() {
    return (
      <Portal node={document.getElementsByClassName("reponav")[0]}>
        <Anchor
          id={this.props.id}
          to="/onboardor"
          className={classnames("reponav-item", this.state.selected && "selected")}
          selected={this.state.selected}
        >
          onboardor
        </Anchor>
      </Portal>
    );
  }
}

export default withRouter(NavLink);
