/* tslint:disable:max-line-length */

import { makeRouteConfig, Route } from "found";
import React from "react";
import { routeConfig as dashboardRouteConfig } from "../../dashboard/dashboardContainer";
import { routeConfig as setupRouteConfig } from "../../../../Components/setup/setupContainer";
import { routeConfig as organizationsRouteConfig } from "../../../../Components/dashboard/organizations/organizationsContainer";
import { routeConfig as onboardingProcessRouteConfig } from "../../../../Components/dashboard/onboardingProcess/onboardingProcessContainer";
import { routeConfig as memberOnboardingProcessRouteConfig } from "../../../../Components/dashboard/onboardingProcess/memberOnboardingProcessContainer";
import { routeConfig as primaryLayoutContainer } from "../../layouts/primaryLayout/primaryLayoutContainer";
import { routeConfig as savedOnboardingProcessRouteConfig } from "../../../../Components/dashboard/onboardingProcess/savedOnboardingProcessContainer";

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutContainer}>
    <Route path="/onboardor" {...dashboardRouteConfig}>
      <Route {...organizationsRouteConfig} />
      <Route path="/setup" {...setupRouteConfig} />
      <Route path="organization/:organizationId/onboardingProcess" {...onboardingProcessRouteConfig} />
      <Route path="organization/:organizationId/onboardingProcess/savedProcess/:processId" {...savedOnboardingProcessRouteConfig} />
      <Route path="organization/:organizationId/onboardingProcess/member/:memberId" {...memberOnboardingProcessRouteConfig} />
    </Route>
  </Route>,
);
