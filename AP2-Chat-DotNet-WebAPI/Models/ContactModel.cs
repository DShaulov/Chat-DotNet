namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class ContactModel
    {
        // Add Item
        public void addContact(Contact contact)
        {
            using (var db = new MyDbContext())
            {
                db.Contacts.Add(contact);
                db.SaveChanges();
            }
        }
        // Get Item
        public List<Contact>? getContacts(string id)
        {
            using (var db = new MyDbContext())
            {
                List<Contact>? contacts = db.Contacts.Where(c => c.whose == id).ToList();
                return contacts;
            }
        }
    }
}
