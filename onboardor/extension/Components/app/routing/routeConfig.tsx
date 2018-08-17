/* tslint:disable:max-line-length */

import { makeRouteConfig, Route } from "found";
import React from "react";
import { routeConfig as dashboardRouteConfig } from "../../dashboard/dashboardContainer";
import { routeConfig as organizationsRouteConfig } from "../../../../Components/dashboard/organizations/organizationsContainer";
import { routeConfig as onboardingProcessRouteConfig } from "../../../../Components/dashboard/onboardingProcess/onboardingProcessContainer";
import { routeConfig as primaryLayoutContainer } from "../../layouts/primaryLayout/primaryLayoutContainer";

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutContainer}>
    <Route path="/onboardor" {...dashboardRouteConfig}>
      <Route {...organizationsRouteConfig} />
      <Route path="organization/:id/onboardingProcess" {...onboardingProcessRouteConfig} />
    </Route>
  </Route>,
);
