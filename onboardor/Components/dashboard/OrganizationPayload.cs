using DotNetEnv;
using GraphQL;
using GraphQL.Relay.Types.Temp;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.Extensions.Configuration;
using Onboardor.Components.graphQl;
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
            Field<NonNullGraphType<ListGraphType<OnboardingProcessPayload>>>("onboardingProcesses");
            Field<NonNullGraphType<ListGraphType<OnboardingStepPayload>>>("onboardingSteps", resolve: context => _organizationService.GetStepsForOrganization(context.Source.Id));
            Field<NonNullGraphType<ListGraphType<OnboardingPipelinePayload>>>("onboardingPipelines");
            Field<NonNullGraphType<ListGraphType<MemberPayload>>>("members", resolve: context => context.Source.Members.Select(m => m.Member));
        }

        public override Organization GetById(string id)
        {
            return _organizationService.GetOrganization(int.Parse(id));
        }
    }
}
