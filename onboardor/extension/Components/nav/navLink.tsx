import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Portal } from "react-portal";
import { Link, withRouter } from "found";
import { IMatch, IStyleProps } from "../../../Components/types";

interface IProps {
  match: IMatch;
  selected: boolean;
  onClick: () => void;
  id: string;
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

class NavLink extends React.Component<IProps> {
  constructor(props: IProps, public observer: MutationObserver) {
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
          id={this.props.id}
          to="/onboardor"
          className={classnames("reponav-item", this.props.selected && "selected")}
          selected={this.props.selected}
          onClick={this.props.onClick}
        >
          onboardor
        </Anchor>
      </Portal>
    );
  }
}

export default withRouter(NavLink);
