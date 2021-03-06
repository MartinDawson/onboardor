﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using onboardor.Components.dashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Onboardor.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<OnboardingProcess> OnboardingProcesses { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<OnboardingPipeline> OnboardingPipelines { get; set; }
        public DbSet<OnboardingStep> OnboardingSteps { get; set; }

        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
