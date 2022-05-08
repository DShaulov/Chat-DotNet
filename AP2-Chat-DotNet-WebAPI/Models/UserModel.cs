namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class UserModel
    {
        // Add Item
        public void addUser(User user)
        {
            using (var db = new MyDbContext())
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
        }

        // Get Item
        public User? getUser(string id)
        {
            using (var db = new MyDbContext())
            {
                User? user= db.Users.Find(id);
                return user;
            }
        }
    }
}
