using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;
using AP2_Chat_DotNet_WebAPI.Services;


namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvitationsController : Controller
    {
        private readonly IContactService contactService;
        public InvitationsController(IContactService service)
        {
            contactService = service;
        }
        [HttpPost]
        public IActionResult RecieveInvitation(string from, string to, string server)
        {
            contactService.addContact(to, from, from, server);
            return StatusCode(201);
        }
    }
}
