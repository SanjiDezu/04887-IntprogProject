using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Gallery_Tallo.Models;

namespace Gallery_Tallo.Controllers;

public class HomeController : Controller
{

    public IActionResult Index()
    {
        return View();
    }

    public ViewResult aboutme()
    {
        return View();
    }

    public ViewResult Press()
    {
        return View();
    }

    public ViewResult contact() {
        return View();
    }

    public ViewResult Blog()
    {
        return View();
    }
    public ViewResult Books()
    {
        return View();
    }
}
