using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;


namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("db/[controller]")]
    public class ClientsideUsersController : Controller
    {
        [HttpGet]
        public List<User> Get()
        {
            UserModel userModel = new UserModel();
            return userModel.getAllUsers();
        }
    }
}
