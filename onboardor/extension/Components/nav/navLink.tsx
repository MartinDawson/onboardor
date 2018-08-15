import React from "react";
import styled from "styled-components";
import { IStyleProps, IMatch } from "../../../../Components/types";
import classnames from "classnames";
import { Portal } from "react-portal";
import { Link, withRouter } from "found";

interface IProps {
  match: IMatch;
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
  constructor(props: {}, public observer: MutationObserver) {
    super(props);

    this.state = {
      selected: false,
    };
  }
  componentDidMount() {
    // this.observer = new MutationObserver(() => {
    //   if (window.location.hash === "#onboardor") {
    //     const selectedItem = document.querySelector(`.reponav-item.selected:not([id='${id}'])`);

    //     if (selectedItem) {
    //       selectedItem.classList.remove("selected");
    //     }

    //     this.setState({ selected: true });
    //   } else {
    //     this.setState({ selected: false });
    //   }
    // });

    // this.observer.observe(document, {
    //   subtree: true,
    //   childList: true,
    // })
  }
  componentWillUnmount() {
    // this.observer.disconnect();
  }
  render() {
    return (
      <Portal node={document.getElementsByClassName("reponav")[0]}>
        <Anchor
          id={id}
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
