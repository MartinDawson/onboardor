using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OrganizationMember
    {
        public int Id { get; set; }
        [Required]
        public Organization Organization { get; set; }
        [Required]
        public Member Member { get; set; }
    }
}
