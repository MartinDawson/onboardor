import React from "react";
import { compose, setDisplayName, wrapDisplayName } from "recompose";

import DisplayType from "./displayType";

const withDisplayType = (Component: React.ComponentType) => {
  const DisplayTypeWrapper = (props: any) => (
    <DisplayType>
      {(displayType) => <Component {...props} displayType={displayType} />}
    </DisplayType>
  );

  return compose(
    setDisplayName(wrapDisplayName(Component, "withDisplayType")),
  )(DisplayTypeWrapper);
};

export default withDisplayType;
