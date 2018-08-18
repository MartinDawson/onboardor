import { Portal, PortalProps } from "react-portal";
import React from "react";

class PortalReplacer extends React.Component<PortalProps> {
  componentWillMount() {
    if (this.props.node) {
      this.props.node.innerHTML = "";
    }
  }
  render() {
    return (
      <Portal node={this.props.node}>
        {this.props.children}
      </Portal>
    );
  }
}

export default PortalReplacer;
