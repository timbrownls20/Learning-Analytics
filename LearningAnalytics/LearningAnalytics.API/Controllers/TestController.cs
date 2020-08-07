using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LearningAnalytics.API.Controllers
{
    [Route("[controller]")]
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return Content("Test Page");
        }
    }
}