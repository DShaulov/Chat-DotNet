using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;
using AP2_Chat_DotNet_WebAPI.Services;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("api/contacts/{contactId}/[controller]")]
    public class MessagesController : Controller
    {
        private readonly IMessageService messageService;
        public MessagesController(IMessageService service)
        {
            messageService = service;
        }
        //[Authorize]
        [HttpGet]
        public IActionResult GetMessages(string contactId)
        {
            //string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            List<Message> messages = messageService.getUserMessages("mac", contactId);
            return Json(messages);
        }
        [HttpPost]
        public IActionResult PostMessage(string contactId, string content)
        {
            //string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            messageService.addUserMessage("mac", contactId, content);
            return Ok();
        }
        
    }
}
