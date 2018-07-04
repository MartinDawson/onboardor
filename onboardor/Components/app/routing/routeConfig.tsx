import { makeRouteConfig, Route } from "found";
import React from "react";

import { routeConfig as dashboardRouteConfig } from "../../dashboard/dashboardContainer";
import { routeConfig as errorPageRouteConfig } from "../../errorPage/errorPageContainer";
import { routeConfig as imprintRouteConfig } from "../../footer/imprintContainer";
import { routeConfig as privacyPolicyRouteConfig } from "../../footer/privacyPolicyContainer";
import { routeConfig as termsAndConditionsRouteConfig } from "../../footer/termsAndConditionsContainer";
import { routeConfig as installRouteConfig } from "../../install/installContainer";
import { routeConfig as landingPageRouteConfig } from "../../landingPage/landingPageContainer";
import { routeConfig as primaryLayoutRouteConfig } from "../../layouts/primaryLayout/primaryLayoutContainer";
import { routeConfig as setupRouteConfig } from "../../setup/setupContainer";

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route {...landingPageRouteConfig} />
    <Route path="install" {...installRouteConfig} />
    <Route path="setup" {...setupRouteConfig} />
    <Route path="dashboard" {...dashboardRouteConfig} />
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="termsAndConditions" {...termsAndConditionsRouteConfig} />
    <Route path="privacyPolicy" {...privacyPolicyRouteConfig} />
    <Route path="imprint" {...imprintRouteConfig} />
  </Route>,
);
