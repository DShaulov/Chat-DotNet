namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class Message
    {
        public int id { get; set; }
        public string? content{ get; set; }
        public string? direction { get; set; }
        public string? type { get; set; }
        public string? date { get; set; }
        public string? time { get; set; }
        public string? to { get; set; }
        public string? from { get; set; }
    }

}
