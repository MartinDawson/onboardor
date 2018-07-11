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

        public OrganizationService(IRepository<Organization> repository)
        {
            _repository = repository;
        }

        public void Add(Organization organization)
        {
            _repository.Add(organization);
        }

        public Organization GetOrganization(int organizationId)
        {
            return _repository.GetAll().Include(x => x.Members).Single(x => x.Id == organizationId);
        }
    }
}
