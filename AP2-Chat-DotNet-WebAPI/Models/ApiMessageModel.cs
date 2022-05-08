namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class ApiMessageModel
    {
        // Add Item
        public void addApiMessage(ApiMessage apiMessage)
        {
            using (var db = new MyDbContext())
            {
                db.ApiMessages.Add(apiMessage);
                db.SaveChanges();
            }
        }

        // Get Item
        public ApiMessage? getApiMessage(int messageId)
        {
            using (var db = new MyDbContext())
            {
                ApiMessage? item = db.ApiMessages.Find(messageId); 
                return item;
            }
        }
    }
}
