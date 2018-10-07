using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebHooks;
using Newtonsoft.Json.Linq;
using onboardor.Components.dashboard;
using onboardor.GitHubDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Controllers
{
    public class GitHubController : ControllerBase
    {
        private readonly IStepService _stepService;

        public GitHubController(IStepService stepService)
        {
            _stepService = stepService;
        }

        [GitHubWebHook(EventName = "issues")]
        public IActionResult HandlerForPush(string id, JObject data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var issue = data.ToObject<PayloadDTO>().Issue;
            var step = _stepService.GetStep(issue.Id);

            if (step == null) return Ok();

            step.IsClosed = issue.State == "closed" ? true : false;
            step.Name = issue.Title;

            _stepService.Update(step);

            return Ok();
        }

        [GitHubWebHook]
        public IActionResult GitHubHandler(string id, string @event, JObject data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok();
        }

        [GeneralWebHook]
        public IActionResult FallbackHandler(string receiverName, string id, string eventName)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok();
        }
    }
}
