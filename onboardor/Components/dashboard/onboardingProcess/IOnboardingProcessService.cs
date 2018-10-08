using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public interface IOnboardingProcessService
    {
        OnboardingProcess GetProcess(int processId);
        void Add(OnboardingProcess process);
    }
}
