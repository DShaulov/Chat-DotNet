using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            var user = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase));
            ContactModel contactModel = new ContactModel();
            var allContacts = contactModel.getContacts(user.Value);
            return Json(allContacts);
        }
    }
}
