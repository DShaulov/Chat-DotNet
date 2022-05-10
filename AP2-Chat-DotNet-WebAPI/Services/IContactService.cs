using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Services
{
    public interface IContactService
    {
        public void addContact(string userId, string contactId, string name, string server);
        public List<Contact>? getContacts(string id);
        public Contact? getContactById(string userId, string contactId);
        public bool updateContactById(string userId, string contactId, string name, string server);
        public bool removeContactById(string userId, string contactId);

    }
}
