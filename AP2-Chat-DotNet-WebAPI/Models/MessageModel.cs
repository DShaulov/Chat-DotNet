using System.Linq;

namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class MessageModel
    {
        // Add Item
        public void addMessage(Message message)
        {
            using (var db = new MyDbContext())
            {
                db.Messages.Add(message);
                db.SaveChanges();
            }
        }

        // Get Item
        public Message? getMessage(int messageId)
        {
            using (var db = new MyDbContext())
            {
                Message? message = db.Messages.Find(messageId);
                return message;
            }
        }
        public List<Message> getMessageByFrom(string from)
        {
            using (var db = new MyDbContext())
            {
                IQueryable<Message> messages = db.Messages.Where(message => message.from == from);
                List<Message> messagesList = messages.ToList();
                return messagesList;
            }

        }
    }
}
