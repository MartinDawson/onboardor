using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.GitHub
{
    public static class GitHubMvcBuilderExtensions
    {
        public static IMvcBuilder SetGitHubWebHooks(this IMvcBuilder builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            GitHubServiceCollectionSetup.AddGitHubServices(builder.Services);

            return builder.AddWebHooks();
        }
    }
}
