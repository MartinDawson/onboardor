using DotNetEnv;
using GraphQL.Relay.Types;
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

namespace onboardor.Components.shared.form
{
    public class SubscribeMailingListPayload : MutationPayloadGraphType<Task<object>>
    {
        private readonly IMailChimpManager _mailChimpManager;

        public SubscribeMailingListPayload()
        {
            _mailChimpManager = new MailChimpManager(Env.GetString("MAILCHIMP_APIKEY"));

            Name = nameof(SubscribeMailingListPayload);
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var recaptcha = inputs.Get<string>("recaptcha");
            var email = inputs.Get<string>("email");
            var listId = Env.GetString("MAILCHIMP_LISTID");
            var parameters = new Dictionary<string, string> {
                { "secret", Env.GetString("RECAPTCHA_SECRET") },
                { "response", recaptcha }
            };
            var encodedContent = new FormUrlEncodedContent(parameters);

            using (var client = new HttpClient())
            {
                var response = await client.PostAsync(Env.GetString("RECAPTCHA_VERIFY_URL"), encodedContent);
                var recpatcha = await response.Content.ReadAsAsync<Recaptcha>();

                response.EnsureSuccessStatusCode();

                if (!recpatcha.Success) return null;
            }

            var member = new Member { EmailAddress = email, StatusIfNew = Status.Subscribed };

            await _mailChimpManager.Members.AddOrUpdateAsync(listId, member);

            return null;
        }
    }
}
