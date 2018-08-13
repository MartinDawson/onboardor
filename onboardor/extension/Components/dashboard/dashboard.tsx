import React from "react";
import PortalReplacer from "../utilities/portalReplacer";

const Dashboard = (props) => (
  <PortalReplacer node={document.getElementsByClassName('repository-content')[0]}>
    {JSON.stringify(props)}
  </PortalReplacer>
);

export default Dashboard;
