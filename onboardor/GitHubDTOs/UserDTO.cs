using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.GitHubDTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Login { get; set; }
        [JsonProperty("avatar_url")]
        public string AvatarUrl { get; set; }
    }
}
