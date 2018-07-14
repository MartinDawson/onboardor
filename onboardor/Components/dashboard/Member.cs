﻿using System;
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
        [Required]
        public bool IsBeingOnboarded { get; set; }
        public Organization Organization { get; set; }
    }
}
