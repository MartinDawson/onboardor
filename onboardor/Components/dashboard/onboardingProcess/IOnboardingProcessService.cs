﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public interface IOnboardingProcessService
    {
        void Update(OnboardingProcess process);
        OnboardingProcess GetProcess(int processId);
        void Add(OnboardingProcess process);
        List<OnboardingStep> GetClosedSteps(int processId);
    }
}
