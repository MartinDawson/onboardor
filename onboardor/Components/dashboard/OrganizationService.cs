using Microsoft.EntityFrameworkCore;
using Onboardor.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OrganizationService : IOrganizationService
    {
        private IRepository<Organization> _repository;
        private IRepository<Member> _membersRepository;
        private IRepository<OnboardingStep> _stepRepository;

        public OrganizationService(
            IRepository<Organization> repository,
            IRepository<Member> membersRepository,
            IRepository<OnboardingStep> stepRepository)
        {
            _repository = repository;
            _membersRepository = membersRepository;
            _stepRepository = stepRepository;
        }

        public void Add(Organization organization)
        {
            _repository.Add(organization);
        }

        public void Update(Organization newOrganization)
        {
            _repository.Update(newOrganization);
        }

        public List<OnboardingStep> GetStepsForOrganization(int organizationId)
        {
            var organization = _repository.GetAll().Single(x => x.Id == organizationId);

            var steps = organization.OnboardingPipelines.SelectMany(x => x.OnboardingSteps);

            foreach (var step in steps)
            {
                _stepRepository.Reload(step);
            }

            return steps.ToList();
        }

        public List<Organization> GetOrganizations(int userId)
        {
            var member = _membersRepository.GetAll()
                .Include(x => x.Organizations)
                .ThenInclude(x => x.Organization)
                .ThenInclude(x => x.OnboardingPipelines)
                .ThenInclude(x => x.OnboardingSteps)
                .SingleOrDefault(x => x.Id == userId);

            if (member == null) return new List<Organization>();

            return member.Organizations.Select(o => o.Organization).ToList();
        }

        public Organization GetOrganization(int organizationId)
        {
            return _repository.GetAll().Include(x => x.OnboardingPipelines).ThenInclude(x => x.OnboardingSteps).Include(x => x.Members).ThenInclude(x => x.Member).SingleOrDefault(x => x.Id == organizationId);
        }
    }
}
