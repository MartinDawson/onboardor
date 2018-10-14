using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.GitHubDTOs
{
    public class PayloadDTO
    {
        public string Action { get; set; }
        public IssueDTO Issue { get; set; }
        public MemberShipDTO MemberShip { get; set; }
        public OrganizationDTO Organization { get; set; }
    }
}
