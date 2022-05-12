using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using AP2_Chat_DotNet_WebAPI.Models;
using AP2_Chat_DotNet_WebAPI.Hubs;
using AP2_Chat_DotNet_WebAPI.Hubs.Clients;



namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class HubController : Controller
    {
        private readonly IHubContext<AppHub, IAppClient> hub;
        public HubController(IHubContext<AppHub, IAppClient> appHub)
        {
            hub = appHub;
        }
        [HttpPost]
        [Route("update")]
        public async Task Update()
        {
            await hub.Clients.All.UpdateSignal();
        }
    }
}
