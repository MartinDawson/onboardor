import { makeRouteConfig, Route } from "found";
import React from "react";

import { routeConfig as dashboardRouteConfig } from "../../dashboard/dashboardContainer";
import { routeConfig as memberRouteConfig } from "../../dashboard/member/memberContainer";
import { routeConfig as organizationRouteConfig } from "../../dashboard/organization/organizationContainer";
import { routeConfig as organizationsRouteConfig } from "../../dashboard/organizations/organizationsContainer";
import { routeConfig as errorPageRouteConfig } from "../../errorPage/errorPageContainer";
import { routeConfig as imprintRouteConfig } from "../../footer/imprintContainer";
import { routeConfig as privacyPolicyRouteConfig } from "../../footer/privacyPolicyContainer";
import { routeConfig as termsAndConditionsRouteConfig } from "../../footer/termsAndConditionsContainer";
import { routeConfig as landingPageRouteConfig } from "../../landingPage/landingPageContainer";
import { routeConfig as primaryLayoutRouteConfig } from "../../layouts/primaryLayout/primaryLayoutContainer";
import { routeConfig as selectOrganizationRouteConfig } from "../../select/selectOrganizationContainer";
import { routeConfig as selectTeamMembersRouteConfig } from "../../select/selectTeamMembersContainer";
import { routeConfig as setupCallbackRouteConfig } from "../../setup/setupCallbackContainer";
import { routeConfig as setupRouteConfig } from "../../setup/setupContainer";

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route path="/dashboard" {...dashboardRouteConfig}>
      <Route {...organizationsRouteConfig} />
      <Route path="organization/:id" {...organizationRouteConfig} />
      <Route path="organization/:id/teamMember/:id" {...memberRouteConfig} />
    </Route>
    <Route path="landingPage" {...landingPageRouteConfig} />
    <Route path="setup" {...setupRouteConfig} />
    <Route path="setupCallback" {...setupCallbackRouteConfig} />
    <Route path="select">
      <Route {...selectOrganizationRouteConfig} />
      <Route path="/teamMembers" {...selectTeamMembersRouteConfig} />
    </Route>
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="termsAndConditions" {...termsAndConditionsRouteConfig} />
    <Route path="privacyPolicy" {...privacyPolicyRouteConfig} />
    <Route path="imprint" {...imprintRouteConfig} />
  </Route>,
);
