import React from "react";
import { Text } from "rebass";

interface IProps {
  onboardingSteps: IOnboardingStep[];
  name: string;
}

export interface IOnboardingStep {
  id: string;
  step: string;
}

const OnboardingSteps = ({
  onboardingSteps,
  name,
}: IProps) => (
  <div>
    <Text>{name} on-boarding process</Text>
    {onboardingSteps.map((onboardingStep) => (
      <div key={onboardingStep.id}>
        {onboardingStep.step}
      </div>
    ))}
  </div>
);

export default OnboardingSteps;
