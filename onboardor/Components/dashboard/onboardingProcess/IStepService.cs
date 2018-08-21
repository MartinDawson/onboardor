using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public interface IStepService
    {
        OnboardingStep GetStep(int stepId);
        void Update(OnboardingStep newStep);
        void Remove(OnboardingStep step);
    }
}
