using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("db/[controller]")]
    public class ClientsideMessagesController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Hello from clientside messages";
        }
        [HttpGet("{from}")]
        public List<Message> GetMessagesByFrom(string from)
        {
            MessageModel messageModel = new MessageModel();
            List<Message> messages = messageModel.getMessageByFrom(from);
            return messages;
        }
    }
}
