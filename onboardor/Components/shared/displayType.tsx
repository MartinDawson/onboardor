import React from "react";
import { withTheme } from "styled-components";
import { ITheme } from "../types";

interface IDisplayTypeInput {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface IProps {
  children: (displayType: IDisplayTypeInput) => JSX.Element;
  theme: ITheme;
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
    if (windowWidth < this.props.theme.breakpoints[0]) {
      return "mobile";
    }

    if (windowWidth < this.props.theme.breakpoints[1]) {
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

export default withTheme(DisplayType);
