using DotNetEnv;
using GraphQL.Relay.Types.Temp;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OrganizationPayload : NodeGraphType<Organization>
    {
        private readonly IOrganizationService _organizationService;

        public OrganizationPayload(IOrganizationService organizationService)
        {
            _organizationService = organizationService;

            Name = nameof(Organization);

            Id(x => x.Id);
            Field(x => x.Name);
            Field(x => x.AvatarUrl);
            Field<NonNullGraphType<ListGraphType<OnboardingStepPayload>>>("OnboardingSteps");
            Field<NonNullGraphType<ListGraphType<MemberPayload>>>("members", resolve: c => c.Source.Members.Select(m => m.Member));
        }

        public override Organization GetById(string id)
        {
            return _organizationService.GetOrganization(int.Parse(id));
        }
    }
}
