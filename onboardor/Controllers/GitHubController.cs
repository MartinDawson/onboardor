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
        private readonly IOrganizationService _organizationService;
        private readonly IMemberService _memberService;

        public GitHubController(
            IStepService stepService,
            IOrganizationService organizationService,
            IMemberService memberService)
        {
            _stepService = stepService;
            _organizationService = organizationService;
            _memberService = memberService;
        }

        [GitHubWebHook(EventName = "organization")]
        public IActionResult HandlerForOrganization(string id, JObject data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var payload = data.ToObject<PayloadDTO>();
            var memberDto = payload.MemberShip.User;
            var organizationDto = payload.Organization;

            if (payload.Action == "member_added")
            {
                var organization = _organizationService.GetOrganization(organizationDto.Id);
                var member = new Member
                {
                    Id = memberDto.Id,
                    Name = memberDto.Login,
                    AvatarUrl = memberDto.AvatarUrl,
                };

                member.Organizations = new List<OrganizationMember> {
                    new OrganizationMember { Member = member, Organization = organization }
                };

                _memberService.Add(member);
            } else if (payload.Action == "member_removed") {
                var member = _memberService.GetMember(memberDto.Id);

                _memberService.Remove(member);
            }

            return Ok();
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
