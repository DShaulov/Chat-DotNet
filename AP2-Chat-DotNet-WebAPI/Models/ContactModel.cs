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
        public Contact getContact(string id)
        {
            using (var db = new MyDbContext())
            {
                Contact contact = db.Contacts.Find(id);
                return contact;
            }
        }
    }
}
