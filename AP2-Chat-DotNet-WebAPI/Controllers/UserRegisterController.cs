using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegisterController : Controller
    {
        [HttpPost]
        public IActionResult Register(string id, string password, string name, string server)
        {
            UserModel userModel = new UserModel();
            User newUser = new User();
            newUser.id = id;
            newUser.name = name;
            newUser.server = server;
            newUser.password = password;
            userModel.addUser(newUser);
            return Ok();
        }
    }
    [Route("api/[controller]")]
    [ApiController]
    public class UserTakenController : Controller
    {
        [HttpPost]
        public IActionResult checkTaken(string id)
        {
            UserModel userModel = new UserModel();
            User? user = userModel.getUser(id);
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
