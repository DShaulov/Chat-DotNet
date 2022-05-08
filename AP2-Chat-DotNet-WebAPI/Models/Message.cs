namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class Message
    {
        public int id { get; set; }
        public string? content { get; set; }
        public string? created { get; set; }
        bool? sent { get; set; }
    }

}
