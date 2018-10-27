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
            Field<NonNullGraphType<ListGraphType<OnboardingProcessPayload>>>("onboardingProcesses", resolve:
                context => context.Source.OnboardingProcesses.Where(x => x.Member == null));
            Field<NonNullGraphType<ListGraphType<OnboardingStepPayload>>>("onboardingSteps", resolve: context => _organizationService.GetStepsForOrganization(context.Source.Id));
            Field<NonNullGraphType<ListGraphType<OnboardingPipelinePayload>>>("onboardingPipelines");
            Field<MemberPayload>(
                "member",
                arguments: new QueryArguments(
                    new QueryArgument<IntGraphType> { Name = "id", Description = "The id of the member to get" }
                ),
                resolve: context =>
                {
                    var id = context.GetArgument<int?>("id");

                    if (id == null) return null;

                    return context.Source.Members.Single(m => m.Member.Id == id).Member;
                });
            Field<OnboardingProcessPayload>(
                    "onboardingProcess",
                    arguments: new QueryArguments(
                        new QueryArgument<IntGraphType> { Name = "id", Description = "The id of the process to get" }
                    ),
                    resolve: context =>
                    {
                        var id = context.GetArgument<int?>("id");

                        if (id == null) return null;

                        return context.Source.OnboardingProcesses.Single(o => o.Id == id);
                    });
            Field<NonNullGraphType<ListGraphType<MemberPayload>>>("members", resolve: context => context.Source.Members.Select(m => m.Member));
        }

        public override Organization GetById(string id)
        {
            return _organizationService.GetOrganization(int.Parse(id));
        }
    }
}
