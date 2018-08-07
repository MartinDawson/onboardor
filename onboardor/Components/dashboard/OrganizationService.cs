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

        public OrganizationService(IRepository<Organization> repository,
            IRepository<Member> membersRepository)
        {
            _repository = repository;
            _membersRepository = membersRepository;
        }

        public void Add(Organization organization)
        {
            _repository.Add(organization);
        }

        public void Update(Organization newOrganization)
        {
            _repository.Update(newOrganization);
        }

        public List<Organization> GetOrganizations(int userId)
        {
            return _membersRepository.GetAll()
                .Include(x => x.Organizations)
                .ThenInclude(x => x.Organization)
                .ThenInclude(x => x.OnboardingPipelines)
                .ThenInclude(x => x.OnboardingSteps)
                .Single(x => x.Id == userId)
                .Organizations.Select(o => o.Organization).ToList();
        }

        public Organization GetOrganization(int organizationId)
        {
            return _repository.GetAll().Include(x => x.OnboardingPipelines).ThenInclude(x => x.OnboardingSteps).Include(x => x.Members).ThenInclude(x => x.Member).Single(x => x.Id == organizationId);
        }
    }
}
