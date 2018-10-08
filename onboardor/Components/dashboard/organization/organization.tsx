import React from "react";
import { IRoute } from "../../types";
import { IMember } from "../member/member";
import { IPipeline } from "../onboardingProcess/pipeline";
import { IStep } from "../onboardingProcess/step";
import { IProcess } from "../onboardingProcess/savedOnboardingProcess";

interface IProps extends IRoute, IOrganization {}

export interface IOrganization {
  id: string;
  organizationId: number;
  name: string;
  avatarUrl: string;
  members: IMember[];
  onboardingPipelines: IPipeline[];
  onboardingSteps: IStep[];
  onboardingProcesses: IProcess[];
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
