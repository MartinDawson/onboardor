using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public interface IOrganizationService
    {
        void Add(Organization organization);
        Organization GetOrganization(int organizationId);
        List<Organization> GetOrganizations(int userId);
    }
}
