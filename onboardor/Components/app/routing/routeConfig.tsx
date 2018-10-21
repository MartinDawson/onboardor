/* tslint:disable:max-line-length */

import { makeRouteConfig, Route, Redirect } from "found";
import React from "react";

import { routeConfig as errorPageRouteConfig } from "../../errorPage/errorPageContainer";
import { routeConfig as imprintRouteConfig } from "../../footer/imprintContainer";
import { routeConfig as privacyPolicyRouteConfig } from "../../footer/privacyPolicyContainer";
import { routeConfig as termsAndConditionsRouteConfig } from "../../footer/termsAndConditionsContainer";
import { routeConfig as landingPageRouteConfig } from "../../landingPage/landingPageContainer";
import { routeConfig as primaryLayoutRouteConfig } from "../../layouts/primaryLayout/primaryLayoutContainer";
import { IMatch } from "../../types";
import { routeConfig as setupCallbackRouteConfig } from "../../setup/setupCallbackContainer";
import { routeConfig as setupRouteConfig } from "../../setup/setupContainer";

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route {...landingPageRouteConfig} />
    <Redirect from="(.*/)" to={({ location }: IMatch) => location.pathname.slice(0, -1)} />
    <Route path="setup" {...setupRouteConfig} />
    <Route path="setupCallback" {...setupCallbackRouteConfig} />
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="termsAndConditions" {...termsAndConditionsRouteConfig} />
    <Route path="privacyPolicy" {...privacyPolicyRouteConfig} />
    <Route path="imprint" {...imprintRouteConfig} />
  </Route>,
);
