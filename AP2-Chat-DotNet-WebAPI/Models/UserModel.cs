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
        public User? getUser(string username)
        {
            using (var db = new MyDbContext())
            {
                User? user= db.Users.Find(username);
                return user;
            }
        }

        public List<User> getAllUsers()
        {
            using (var db = new MyDbContext())
            {
                var users = db.Users.ToList();
                return users;
            }
        }
    }
}
