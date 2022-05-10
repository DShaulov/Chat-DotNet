using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Services
{
    interface IUserService
    {
        public void addUser(User user);
        public User? getUser(string id);

    }
}
