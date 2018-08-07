import React from "react";
import { IRoute } from "../../types";
import { IMember } from "../member/member";

interface IProps extends IRoute, IOrganization {};

export interface IOrganization {
  id: string;
  organizationId: number;
  name: string;
  avatarUrl: string;
  members: IMember[];
  onboardingPipelines: {
    id: string;
    name: string;
    onboardingSteps: {
      id: string;
      name: string;
      description?: string;
    }[]
  }[]
};

const Organization = ({
  onboardingSteps,
  name,
}: IProps) => (
  <div>
    <OnBoardingSteps organizationName={name} onboardingSteps={onboardingSteps} />
  </div>
);

export default Organization;
