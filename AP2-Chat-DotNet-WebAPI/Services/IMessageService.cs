using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Services
{
    public interface IMessageService
    {
        public List<Message> getUserMessages(string userId, string contactId);
        public void addUserMessage(string from, string to, string content);
        public Message? getUserMessageById(string userId, string contactId, int id);
        public bool updateUserMessage(string userId, string contactId, int messageId, string content = "", string created = "");
        public bool removeUserMessage(string userId, string contactId, int messageId);
    }
}
