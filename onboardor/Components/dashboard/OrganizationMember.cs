using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OrganizationMember
    {
        public int Id { get; set; }
        public Organization Organization { get; set; }
        public Member Member { get; set; }
    }
}
