import React from "react";
import { IOrganization } from "../organization/organization";
import { IPipeline } from "./pipeline";
import { IStep } from "./step";

export interface IProcess {
  id: number;
  onboardingProcessId: number;
  name: string;
  organization: IOrganization;
  onboardingPipelines: IPipeline[];
  closedSteps: IStep[];
}

interface IProps {
  process: IProcess;
}

const SavedOnboardingProcess = ({
  process
}: IProps) => (
  <div>
    {process.name}
  </div>
);

export default SavedOnboardingProcess;
