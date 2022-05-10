using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;
using AP2_Chat_DotNet_WebAPI.Services;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegisterController : Controller
    {
        private readonly IUserService userService;
        public UserRegisterController(IUserService service)
        {
            userService = service;
        }
        [HttpPost]
        public IActionResult Register(string id, string password, string name, string server)
        {
            User newUser = new User();
            newUser.id = id;
            newUser.name = name;
            newUser.server = server;
            newUser.password = password;
            userService.addUser(newUser);
            return Ok("OK");
        }
    }
    [Route("api/[controller]")]
    [ApiController]
    public class UserTakenController : Controller
    {
        private readonly IUserService userService;
        public UserTakenController(IUserService service)
        {
            userService = service;
        }
        [HttpPost]
        public IActionResult checkTaken(string id)
        {
            User? user = userService.getUser(id);
            if (user != null)
            {
                return Ok("TAKEN");
            }
            else
            {
                return Ok("Ok");
            }
        }

    }

}
