using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;
using AP2_Chat_DotNet_WebAPI.Services;


namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransferController : Controller
    {
        private readonly IMessageService messageService;
        public TransferController(IMessageService service)
        {
            messageService = service;
        }
        [HttpPost]
        public IActionResult RecieveMessage(string from, string to, string content)
        {
            messageService.addTransferMessage(from, to, content);
            return StatusCode(201);
        }
    }
}
