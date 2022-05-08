using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;


namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Hello from contacts";
        }
    }
}
