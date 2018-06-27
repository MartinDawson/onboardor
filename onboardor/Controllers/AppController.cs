using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Octokit;
using onboardor.Components.shared.utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;

namespace Onboardor.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Authorized()
        {
            var p = HttpContext.Request;
            return View();
        }

        public IActionResult Webhook()
        {
            return View();
        }

        [Produces("text/html")]
        public IActionResult Index()
        {
            return View("~/wwwroot/build/index.html");
        }

        [Produces("application/xml")]
        public IActionResult Sitemap()
        {
            return View("~/wwwroot/sitemap.xml");
        }
    }
}