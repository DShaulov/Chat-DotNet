using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Services
{
    public class MessageService : IMessageService
    {
        private static List<Message>? messages;
        private static int messageIdNum = 0;
        public MessageService()
        {
            messages = populateMessages();
        }
        public List<Message> getUserMessages(string userId, string contactId)
        {
            List<Message> userMessages = new List<Message>();
            messages.ForEach(message =>
            {
                if ((message.from == userId && message.to == contactId && message.sent == true) ||(message.from == contactId && message.to == userId && message.sent == true))
                {
                    userMessages.Add(message);
                }
            });
            return userMessages;
        }
        public void addUserMessage(string from, string to, string content)
        {
            Message newMessage = new Message();
            newMessage.id = messageIdNum++;
            newMessage.from = from;
            newMessage.to = to;
            newMessage.content = content;
            newMessage.created = DateTime.UtcNow.ToString();
            newMessage.sent = true;
            messages.Add(newMessage);

            Message newMessageForContact = new Message();
            newMessageForContact.id = messageIdNum++;
            newMessageForContact.from = from;
            newMessageForContact.to = to;
            newMessageForContact.content = content;
            newMessageForContact.created = DateTime.UtcNow.ToString();
            newMessageForContact.sent = false;
            messages.Add(newMessageForContact);

        }
        public Message? getUserMessageById(string userId, string contactId ,int id)
        {
            List<Message> userMessages = getUserMessages(userId, contactId);
            for (int i = 0; i < userMessages.Count; i++)
            {
                if (userMessages[i].id == id)
                {
                    return userMessages[i];
                }
            }
            return null;
        }
        public bool updateUserMessage(string userId, string contactId, int messageId, string content)
        {
            Message? userMessage = getUserMessageById(userId, contactId, messageId);
            if (userMessage != null)
            {
                userMessage.content = content;
                return true;
            }
            return false;
        }
        public bool removeUserMessage(string userId, string contactId, int messageId)
        {
            Message? userMessage = getUserMessageById(userId, contactId, messageId);
            if (userMessage != null)
            {
                messages.Remove(userMessage);
                return true;
            }
            return false;
        }
        private List<Message> populateMessages()
        {
            List<Message> populatingMessages = new List<Message>();

            Message macToDee = new Message();
            macToDee.id = messageIdNum;
            messageIdNum++;
            macToDee.from = "mac";
            macToDee.to = "dee";
            macToDee.content = "My elbows are massive.";
            macToDee.created = "2022-04-24T07:04";
            macToDee.sent = true;
            Message deeToMac = new Message();
            deeToMac.id = messageIdNum;
            messageIdNum++;
            deeToMac.from = "mac";
            deeToMac.to = "dee";
            deeToMac.content = "My elbows are massive.";
            deeToMac.created = "2022-04-24T07:04";
            deeToMac.sent = false;

            Message macToDennis = new Message();
            macToDennis.id = messageIdNum;
            messageIdNum++;
            macToDennis.from = "mac";
            macToDennis.to = "dennis";
            macToDennis.content = "I have a dennis shaped hole inside of me.";
            macToDennis.created = "2022-04-24T19:34";
            macToDennis.sent = true;
            Message dennisToMac = new Message();
            dennisToMac.id = messageIdNum;
            messageIdNum++;
            dennisToMac.from = "mac";
            dennisToMac.to = "dennis";
            dennisToMac.content = "I have a dennis shaped hole inside of me.";
            dennisToMac.created = "2022-04-24T19:34";
            dennisToMac.sent = false;

            Message frankToCharlie = new Message();
            frankToCharlie.id = messageIdNum;
            messageIdNum++;
            frankToCharlie.from = "frank";
            frankToCharlie.to = "charlie";
            frankToCharlie.content = "Botched toe, thats a botched toe.";
            frankToCharlie.created = "2022-04-24T08:00";
            frankToCharlie.sent = false;
            Message charlieToFrank = new Message();
            charlieToFrank.id = messageIdNum;
            messageIdNum++;
            charlieToFrank.from = "frank";
            charlieToFrank.to = "charlie";
            charlieToFrank.content = "Botched toe, thats a botched toe.";
            charlieToFrank.created = "2022-04-24T08:00";
            charlieToFrank.sent = true;


            Message frankToDee = new Message();
            frankToDee.id = messageIdNum;
            messageIdNum++;
            frankToDee.from = "frank";
            frankToDee.to = "dee";
            frankToDee.content = "Deandra will take care of me.";
            frankToDee.created = "2022-04-24T08:02";
            frankToDee.sent = true;
            Message deeToFrank = new Message();
            deeToFrank.id = messageIdNum;
            messageIdNum++;
            deeToFrank.from = "frank";
            deeToFrank.to = "dee";
            deeToFrank.content = "Deandra will take care of me.";
            deeToFrank.created = "2022-04-24T08:02";
            deeToFrank.sent = false;

            Message dennisToCharlie = new Message();
            dennisToCharlie.id = messageIdNum;
            messageIdNum++;
            dennisToCharlie.from = "dennis";
            dennisToCharlie.to = "charlie";
            dennisToCharlie.content = "Ghouls dont exist.";
            dennisToCharlie.created = "2022-04-24T19:04";
            dennisToCharlie.sent = true;
            Message charlieToDennis = new Message();
            charlieToDennis.id = messageIdNum;
            messageIdNum++;
            charlieToDennis.from = "dennis";
            charlieToDennis.to = "charlie";
            charlieToDennis.content = "Ghouls dont exist.";
            charlieToDennis.created = "2022-04-24T19:04";
            charlieToDennis.sent = false;

            populatingMessages.Add(charlieToDennis);
            populatingMessages.Add(dennisToCharlie);

            populatingMessages.Add(macToDennis);
            populatingMessages.Add(dennisToMac);

            populatingMessages.Add(deeToFrank);
            populatingMessages.Add(frankToDee);

            populatingMessages.Add(macToDee);
            populatingMessages.Add(deeToMac);

            populatingMessages.Add(charlieToFrank);
            populatingMessages.Add(frankToCharlie);

            return populatingMessages;
        }




    }
}
