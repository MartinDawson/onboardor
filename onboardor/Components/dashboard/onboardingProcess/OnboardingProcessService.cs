using Microsoft.EntityFrameworkCore;
using Onboardor.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OnboardingProcessService : IOnboardingProcessService
    {
        private IRepository<OnboardingProcess> _repository;

        public OnboardingProcessService(IRepository<OnboardingProcess> repository)
        {
            _repository = repository;
        }

        public OnboardingProcess GetProcess(int processId)
        {
            return _repository.GetAll()
                .Include(x => x.Organization)
                .Include(x => x.OnboardingPipelines)
                .ThenInclude(x => x.OnboardingSteps)
                .SingleOrDefault(x => x.Id == processId);
        }

        public void Add(OnboardingProcess process)
        {
            _repository.Add(process);
        }
    }
}
