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
            Field<NonNullGraphType<OrganizationPayload>>("organization");
            Field<NonNullGraphType<ListGraphType<OnboardingPipelinePayload>>>("onboardingPipelines");
        }

        public override OnboardingProcess GetById(string id)
        {
            return _processService.GetProcess(int.Parse(id));
        }
    }
}
