using System.Text.Json.Serialization;

namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class Message
    {
        public int id { get; set; }
        public string? content { get; set; }
        public string? created { get; set; }
        public bool? sent { get; set; }
        [JsonIgnore]
        public string? from { get; set; }
        [JsonIgnore]
        public string? to { get; set; }

    }

}
