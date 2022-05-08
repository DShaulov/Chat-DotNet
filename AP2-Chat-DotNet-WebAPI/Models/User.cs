using System.ComponentModel.DataAnnotations;

namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class User
    {
        public string? username { get; set; }
        public string? password { get; set; }
        public string? displayName { get; set; }
        public string? contacts { get; set; }
        public string? profileImage { get; set; }

    }
}
