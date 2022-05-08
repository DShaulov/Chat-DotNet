namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class ApiUserModel
    {
        // Add Item
        public void addApiUser(ApiUser apiUser)
        {
            using (var db = new MyDbContext())
            {
                db.ApiUsers.Add(apiUser);
                db.SaveChanges();
            }
        }

        // Get Item
        public ApiUser? getApiUser(string userId)
        {
            using (var db = new MyDbContext())
            {
                ApiUser? apiUser = db.ApiUsers.Find(userId);
                return apiUser;
            }
        }
    }
}
