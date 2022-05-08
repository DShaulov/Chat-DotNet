using Microsoft.EntityFrameworkCore;

namespace AP2_Chat_DotNet_WebAPI.Models
{
    public class MyDbContext : DbContext
    {
        private const string connectionString = "server=localhost;port=3306;database=AP2-Chat-DotNet;user=root;password=D0544";
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(connectionString, MariaDbServerVersion.AutoDetect(connectionString));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuring the Name property as the primary
            // key of the Items table
            modelBuilder.Entity<ApiMessage>().HasKey(e => e.id);
            modelBuilder.Entity<ApiUser>().HasKey(e => e.id);
            modelBuilder.Entity<User>().HasKey(e => e.username);
            modelBuilder.Entity<Message>().HasKey(e => e.id);
        }

        public DbSet<ApiMessage>? ApiMessages { get; set; }
        public DbSet<ApiUser>? ApiUsers { get; set; }
        public DbSet<User>? Users{ get; set; }
        public DbSet<Message>? Messages{ get; set; }

    }
}