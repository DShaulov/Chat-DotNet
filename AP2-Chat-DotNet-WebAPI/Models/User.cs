using System.ComponentModel.DataAnnotations;

namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class User
    {
        public User()
        {
            contacts = new List<Contact>();
        }
        public string? id { get; set; }
        public string? password { get; set; }
        public string? name { get; set; }
        public string? server { get; set; }

        public List<Contact>? contacts { get; set; }

    }
}
