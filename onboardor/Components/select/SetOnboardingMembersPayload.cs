using DotNetEnv;
using GraphQL.Relay.Types;
using GraphQL.Types;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using Microsoft.Extensions.Configuration;
using onboardor.Components.dashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace onboardor.Components.select
{
    public class SetOnboardingMembersPayload : MutationPayloadGraphType
    {
        private readonly IMemberService _memberService;

        public SetOnboardingMembersPayload(IMemberService memberService)
        {
            _memberService = memberService;

            Name = nameof(SetOnboardingMembersPayload);
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var memberIds = inputs.Get("memberIds", new object[0]).Cast<int>().ToList();

            return null;
        }
    }
}
