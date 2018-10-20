using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class Member
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string AvatarUrl { get; set; }
        public OnboardingProcess OnboardingProcess { get; set; }
        public ICollection<OrganizationMember> Organizations { get; set; } = new List<OrganizationMember>();
    }
}
