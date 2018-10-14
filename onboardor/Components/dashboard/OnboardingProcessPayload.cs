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
    public class OnboardingProcessPayload : NodeGraphType<OnboardingProcess>
    {
        private readonly IOnboardingProcessService _processService;

        public OnboardingProcessPayload(IOnboardingProcessService processService)
        {
            _processService = processService;

            Name = nameof(OnboardingProcess);

            Id(x => x.Id);
            Field(x => x.Name);
            Field<OrganizationPayload>("organization");
            Field<NonNullGraphType<ListGraphType<OnboardingPipelinePayload>>>("onboardingPipelines");
            Field<NonNullGraphType<ListGraphType<OnboardingStepPayload>>>("closedSteps", resolve: context => _processService.GetClosedSteps(context.Source.Id));
        }

        public override OnboardingProcess GetById(string id)
        {
            return _processService.GetProcess(int.Parse(id));
        }
    }
}
