﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using onboardor.Components.dashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Onboardor.Data
{
    public static class Seeder
    {
        private static IHostingEnvironment _env;

        public static async Task<IWebHost> SeedData(this IWebHost webHost)
        {
            using (var scope = webHost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    _env = scope.ServiceProvider.GetRequiredService<IHostingEnvironment>();

                    if (_env.IsDevelopment())
                    {
                        await context.Database.MigrateAsync();
                        // await SeedMocks(context);
                        // dotnet sql-cache create "Server=.;Database=onboardor;Trusted_Connection=True;Connection Timeout=30;" dbo Cache
                    }
                }
            }

            return webHost;
        }

        public static async Task SeedMocks(ApplicationDbContext context)
        {
            var organizations = new List<Organization>
            {
                new Organization {
                    Id = 371213,
                    AvatarUrl = "https://avatars3.githubusercontent.com/u/37122164?v=4",
                    Name = "SoundVast",
                },
            };

            organizations[0].Members = new List<OrganizationMember>
            {
                new OrganizationMember
                {
                    Organization = organizations[0],
                    Member = new Member
                    {
                        Id = 15030491,
                        AvatarUrl = "https://avatars3.githubusercontent.com/u/15030491?v=4",
                        Name = "MartinDawson",
                    }
                }
            };

            organizations[0].OnboardingPipelines = new List<OnboardingPipeline>
            {
                new OnboardingPipeline
                {
                    Name = "First Day",
                    OnboardingSteps = new List<OnboardingStep>
                    {
                        new OnboardingStep
                        {
                            Name = "Read the wiki",
                        },
                        new OnboardingStep
                        {
                            Name = "Get .env variables",
                        }
                    }
                },
                new OnboardingPipeline
                {
                    Name = "First Week",
                    OnboardingSteps = new List<OnboardingStep>
                    {
                        new OnboardingStep
                        {
                            Name = "Set up email",
                        },
                        new OnboardingStep
                        {
                            Name = "Go through codebase with @MartinDawson",
                        }
                    }
                }
            };

            var existingOrganizations = context.Organizations;

            await context.AddRangeAsync(organizations.Where(o => !existingOrganizations.Any(z => z.Id == o.Id)));

            context.SaveChanges();
        }
    }
}
