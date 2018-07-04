import React from "react";
import { compose, setDisplayName, wrapDisplayName } from "recompose";

import ErrorBoundary from "./errorBoundary";

const withErrorBoundary = (errorOutput: React.ReactNode) => (Component: React.ComponentType) => {
  const ErrorBoundaryWrapper = (props: any) => (
    <ErrorBoundary errorOutput={errorOutput}>
      <Component {...props} />
    </ErrorBoundary>
  );

  return compose(
    setDisplayName(wrapDisplayName(Component, "withErrorBoundary")),
  )(ErrorBoundaryWrapper);
};

export default withErrorBoundary;
