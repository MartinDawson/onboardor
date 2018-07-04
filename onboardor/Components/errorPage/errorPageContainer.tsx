import React from "react";
import { compose, withProps } from "recompose";

import { Route } from "../types/index";
import ErrorPage from "./errorPage";

interface IProps {
  status: number;
  error: string;
}

const createProps = ({ status, error }: IProps) => {
  switch (status) {
    case 404:
      return { error: "The page could not be found." };
    default:
      return { error };
  }
};

const ErrorPageContainer = compose<IProps, IProps>(
  withProps(createProps),
)(ErrorPage);

export const routeConfig = {
  render: (route: Route) => route.props && (
    <ErrorPageContainer
      status={parseInt(route.props.params.status as string, 10)}
      error={route.props.location.state.error}
    />
  ),
};

export default ErrorPageContainer;
