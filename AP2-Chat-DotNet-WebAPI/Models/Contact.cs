using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class Contact
    {
        [Key]
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        public int primaryKey { get; set; }
        public string? id { get; set; }
        public string? name { get; set; }
        public string? last { get; set; }
        public string? server { get; set; }

        public string? lastdate { get; set; }

    }
}
