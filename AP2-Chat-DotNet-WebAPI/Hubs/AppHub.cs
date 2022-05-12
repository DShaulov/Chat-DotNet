using Microsoft.AspNetCore.SignalR;
using AP2_Chat_DotNet_WebAPI.Hubs.Clients;
namespace AP2_Chat_DotNet_WebAPI.Hubs
{
    public class AppHub : Hub<IAppClient>
    {
        public async Task SendUpdate()
        {
            await Clients.All.UpdateSignal();
        }
    }
}
