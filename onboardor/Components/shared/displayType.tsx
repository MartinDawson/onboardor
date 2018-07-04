import React from "react";

import {
  breakpointMobile,
  breakpointTablet,
} from "../styles/sizes";

interface IDisplayTypeInput {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface IProps {
  children: (displayType: IDisplayTypeInput) => JSX.Element;
}

class DisplayType extends React.Component<IProps> {
  public state: { displayType: string } = {
    displayType: "desktop",
  };

  public componentWillMount() {
    window.addEventListener("resize", this.updateDisplayType);
    this.updateDisplayType();
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateDisplayType);
  }

  public getDisplayType = (windowWidth: number) => {
    if (windowWidth < breakpointMobile.value) {
      return "mobile";
    }

    if (windowWidth < breakpointTablet.value) {
      return "tablet";
    }

    return "desktop";
  }

  public updateDisplayType = () => {
    const windowWidth = document.body.getBoundingClientRect().width;
    const displayType = this.getDisplayType(windowWidth);

    if (displayType !== this.state.displayType) {
      this.setState({ displayType });
    }
  }

  public render() {
    const displayType = {
      isDesktop: this.state.displayType === "desktop",
      isMobile: this.state.displayType === "mobile",
      isTablet: this.state.displayType === "tablet",
    };

    return this.props.children(displayType);
  }
}

export default DisplayType;
