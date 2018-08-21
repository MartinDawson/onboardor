using Microsoft.EntityFrameworkCore;
using Onboardor.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class StepService : IStepService
    {
        private IRepository<OnboardingStep> _repository;

        public StepService(IRepository<OnboardingStep> repository)
        {
            _repository = repository;
        }

        public OnboardingStep GetStep(int stepId)
        {
            return _repository.GetAll().Include(x => x.OnboardingPipeline).SingleOrDefault(x => x.Id == stepId);
        }

        public void Remove(OnboardingStep step)
        {
            _repository.Remove(step);
        }

        public void Update(OnboardingStep newStep)
        {
            _repository.Update(newStep);
        }
    }
}
