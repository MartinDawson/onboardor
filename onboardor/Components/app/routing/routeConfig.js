import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import { routeConfig as termsAndConditionsRouteConfig } from '../../footer/termsAndConditionsContainer';
import { routeConfig as privacyPolicyRouteConfig } from '../../footer/privacyPolicyContainer';
import { routeConfig as imprintRouteConfig } from '../../footer/imprintContainer';
import { routeConfig as errorPageRouteConfig } from '../../errorPage/errorPageContainer';
import { routeConfig as primaryLayoutRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import { routeConfig as landingPageRouteConfig } from '../../landingPage/landingPageContainer';
import { routeConfig as dashboardRouteConfig } from '../../dashboard/dashboardContainer';
import { routeConfig as setupRouteConfig } from '../../setup/setupContainer';
import { routeConfig as installRouteConfig } from '../../install/installContainer';

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
