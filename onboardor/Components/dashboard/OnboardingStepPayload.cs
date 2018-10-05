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
    public class OnboardingStepPayload : NodeGraphType<OnboardingStep>
    {
        public OnboardingStepPayload()
        {
            Name = nameof(OnboardingStep);

            Id(x => x.Id);
            Field(x => x.IssueNumber);
            Field(x => x.Name);
            Field<OrganizationPayload>("organization", resolve: c => c.Source.OnboardingPipeline.Organization);
        }

        public override OnboardingStep GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
