using AP2_Chat_DotNet_WebAPI.Models;

namespace AP2_Chat_DotNet_WebAPI.Services
{
    interface IContactService
    {
        public void addContact(Contact contact);
        public List<Contact>? getContacts(string id);


    }
}
