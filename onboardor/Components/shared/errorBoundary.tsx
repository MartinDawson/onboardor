import React from "react";

interface IProps {
  errorOutput?: React.ReactNode;
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps>  = {
    errorOutput: "Sorry, something went wrong",
  };
  public state = {
    hasError: false,
  };
  public componentDidCatch() {
    this.setState({ hasError: true });
  }
  public render() {
    if (this.state.hasError) {
      return this.props.errorOutput;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
