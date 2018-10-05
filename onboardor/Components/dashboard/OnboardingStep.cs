using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OnboardingStep
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int IssueNumber { get; set; }
        [Required]
        public string Name { get; set; }
        public OnboardingPipeline OnboardingPipeline { get; set; } 
    }
}
