using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Onboardor.Controllers
{
    public class AppController : Controller
    {
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