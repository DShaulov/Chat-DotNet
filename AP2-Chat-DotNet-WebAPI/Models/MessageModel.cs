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
    }
}
