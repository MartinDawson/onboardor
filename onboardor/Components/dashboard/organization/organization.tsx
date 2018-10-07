import React from "react";
import { IRoute } from "../../types";
import { IMember } from "../member/member";
import { IPipline } from "../onboardingProcess/pipeline";
import { IStep } from "../onboardingProcess/step";

interface IProps extends IRoute, IOrganization {}

export interface IOrganization {
  id: string;
  organizationId: number;
  name: string;
  avatarUrl: string;
  members: IMember[];
  onboardingPipelines: IPipline[];
  onboardingSteps: IStep[];
}

const Organization = ({
  onboardingSteps,
  name,
}: IProps) => (
  <div>
    {/* <OnBoardingSteps organizationName={name} onboardingSteps={onboardingSteps} /> */}
  </div>
);

export default Organization;
