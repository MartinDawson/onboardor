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
        private IRepository<OnboardingStep> _stepRepository;

        public OnboardingProcessService(
            IRepository<OnboardingProcess> repository,
            IRepository<OnboardingStep> stepRepository)
        {
            _repository = repository;
            _stepRepository = stepRepository;
        }

        public OnboardingProcess GetProcess(int processId)
        {
            return _repository.GetAll()
                .Include(x => x.Organization)
                .Include(x => x.OnboardingPipelines)
                .ThenInclude(x => x.OnboardingSteps)
                .SingleOrDefault(x => x.Id == processId);
        }

        public List<OnboardingStep> GetClosedSteps(int processId)
        {
            var process = _repository.GetAll().Single(x => x.Id == processId);

            var steps = process.OnboardingPipelines.SelectMany(x => x.OnboardingSteps);

            foreach (var step in steps)
            {
                _stepRepository.Reload(step);
            }

            return steps.Where(z => z.IsClosed).ToList();
        }

        public void Add(OnboardingProcess process)
        {
            _repository.Add(process);
        }
    }
}
