import React from "react";
import { IRoute } from "../../types";
import { IMember } from "../member/member";
import { IOnboardingStep } from "../onboardingSteps/onboardingSteps";
import OnBoardingSteps from "../onboardingSteps/onboardingSteps";

interface IProps extends IRoute, IOrganization {};

export interface IOrganization {
  id: string;
  organizationId: number;
  name: string;
  avatarUrl: string;
  members: IMember[];
  onboardingSteps: IOnboardingStep[];
}

const Organization = ({
  onboardingSteps,
  name,
}: IProps) => (
  <div>
    <OnBoardingSteps organizationName={name} onboardingSteps={onboardingSteps} />
  </div>
);

export default Organization;
