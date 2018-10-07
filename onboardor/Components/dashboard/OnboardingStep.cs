using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class OnboardingStep
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [Required]
        public int IssueNumber { get; set; }
        [Required]
        public bool IsClosed { get; set; }
        [Required]
        public string Name { get; set; }
        public OnboardingPipeline OnboardingPipeline { get; set; } 
    }
}
