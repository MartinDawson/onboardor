using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public interface IOrganizationService
    {
        List<OnboardingStep> GetStepsForOrganization(int organizationId);
        void Add(Organization organization);
        void Remove(Organization organization);
        void Update(Organization newOrganization);
        Organization GetOrganization(int organizationId);
        List<Organization> GetOrganizations(int userId);
    }
}
