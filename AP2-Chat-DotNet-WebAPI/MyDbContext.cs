using Microsoft.EntityFrameworkCore;

namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class MyDbContext : DbContext
    {
        private const string connectionString = "server=localhost;port=3306;database=DotNet-DB;user=root;password=D0544";
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(connectionString, MariaDbServerVersion.AutoDetect(connectionString));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuring the Name property as the primary
            // key of the Items table
            modelBuilder.Entity<User>().HasKey(e => e.id);
            modelBuilder.Entity<Message>().HasKey(e => e.id);
            modelBuilder.Entity<Contact>().HasKey(e => e.primaryKey);
        }

        public DbSet<User>? Users{ get; set; }
        public DbSet<Message>? Messages{ get; set; }
        public DbSet<Contact>? Contacts{ get; set; }


    }
}