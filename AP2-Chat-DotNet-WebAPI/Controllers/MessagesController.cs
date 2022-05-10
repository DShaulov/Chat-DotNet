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
        [Authorize]
        [HttpGet]
        public IActionResult GetMessages(string contactId)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            List<Message> messages = messageService.getUserMessages(userId, contactId);
            return Json(messages);
        }
        [Authorize]
        [HttpPost]
        public IActionResult PostMessage(string contactId, string content)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            messageService.addUserMessage(userId, contactId, content);
            return Ok();
        }
        [Authorize]
        [Route("{messageId}")]
        [HttpGet]
        public IActionResult GetMessageById(string contactId, int messageId)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            Message? message = messageService.getUserMessageById( userId, contactId, messageId);
            if (message != null)
            {
                return Json(message);
            }
            else
            {
                return StatusCode(404);
            }
        }
        [Authorize]
        [Route("{messageId}")]
        [HttpPut]
        public IActionResult UpdateMessageById(string contactId, int messageId, string content)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            bool updateSuccesful = messageService.updateUserMessage(userId, contactId, messageId, content);
            if (updateSuccesful)
            {
                return Ok();
            }
            else
            {
                return StatusCode(404);
            }
        }


        [Authorize]
        [Route("{messageId}")]
        [HttpDelete]
        public IActionResult RemoveMessageById(string contactId, int messageId)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            bool removeSuccesful = messageService.removeUserMessage(userId, contactId, messageId);
            if (removeSuccesful)
            {
                return NoContent();
            }
            else
            {
                return StatusCode(404);
            }

        }
    }
}
