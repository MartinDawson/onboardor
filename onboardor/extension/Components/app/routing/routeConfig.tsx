/* tslint:disable:max-line-length */

import { makeRouteConfig, Route } from "found";
import React from "react";
import { routeConfig as dashboardRouteConfig } from "../../dashboard/dashboardContainer";
import { routeConfig as navLinkRouteConfig } from "../../nav/navLinkContainer";

export default makeRouteConfig(
  <Route path="/" {...navLinkRouteConfig}>
    <Route path="/onboardor" {...dashboardRouteConfig} />
  </Route>,
);
