using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OnboardingProcess
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public Organization Organization { get; set; }
        public ICollection<OnboardingPipeline> OnboardingPipelines { get; set; } = new List<OnboardingPipeline>();
    }
}
