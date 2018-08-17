import React from "react";
import PortalReplacer from "../utilities/portalReplacer";

interface IProps {
  children: React.ReactNode;
}

const Dashboard = ({
  children,
}: IProps) => (
  <PortalReplacer node={document.getElementsByClassName('repository-content')[0]}>
    {children}
  </PortalReplacer>
);

export default Dashboard;
