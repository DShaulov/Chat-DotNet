namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class ApiMessage
    {
        public int id { get; set; }
        public string? content{ get; set; }
        public string? created{ get; set; }
        public Boolean sent{ get; set; }
        public string? to { get; set; }
        public string? from { get; set; }


    }
}
