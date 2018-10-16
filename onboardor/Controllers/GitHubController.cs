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

        public GitHubController(
            IStepService stepService)
        {
            _stepService = stepService;
        }

        [GitHubWebHook(EventName = "issues")]
        public IActionResult HandlerForIssues(string id, JObject data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var issueDto = data.ToObject<PayloadDTO>().Issue;
            var step = _stepService.GetStep(issueDto.Id);

            if (step == null) return Ok();

            step.IsClosed = issueDto.State == "closed" ? true : false;
            step.Name = issueDto.Title;

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
