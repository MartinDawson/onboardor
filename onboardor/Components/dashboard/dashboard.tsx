import { Box } from "grid-styled";
import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const DashboardHeader = styled(Box)`
  box-shadow: 0 2px 4px 0 #d2d2d2;
  height: 80px;
`;

const Dashboard = ({
  children,
}: IProps) => (
  <div>
    <DashboardHeader width="100%" p={10} />
    {children}
  </div>
);

export default Dashboard;
