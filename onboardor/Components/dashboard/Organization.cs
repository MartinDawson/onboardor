using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class Organization
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string AvatarUrl { get; set; }
        public ICollection<OnboardingPipeline> OnboardingPipelines { get; set; } = new List<OnboardingPipeline>();
        public ICollection<OrganizationMember> Members { get; set; } = new List<OrganizationMember>();
    }
}
