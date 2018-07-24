import React from "react";

interface IProps {
  onboardingSteps: IOnboardingStep[];
}

export interface IOnboardingStep {
  step: string;
}

const OnboardingSteps = ({
  onboardingSteps,
}: IProps) => (
  <div>
    {onboardingSteps.map(onboardingStep => onboardingStep.step)}
  </div>
);

export default OnboardingSteps;
