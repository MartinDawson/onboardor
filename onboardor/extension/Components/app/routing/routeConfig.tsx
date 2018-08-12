/* tslint:disable:max-line-length */

import { makeRouteConfig, Route } from "found";
import React from "react";
import { routeConfig as dashboardRouteConfig } from "../../dashboard/dashboardContainer";

export default makeRouteConfig(
  <Route path="/">
    <Route {...dashboardRouteConfig} />
  </Route>,
);
