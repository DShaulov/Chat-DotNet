using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Services
{
    public interface IContactService
    {
        public void addContact(Contact contact);
        public List<Contact>? getContacts(string id);
        public Contact? getContactById(string userId, string contactId);
        public bool updateContactById(string userId, string contactId, string name = "", string server = "", string last = "", string lastdate = "");
        public bool removeContactById(string userId, string contactId);

    }
}
