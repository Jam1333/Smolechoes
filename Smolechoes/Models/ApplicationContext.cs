using Microsoft.EntityFrameworkCore;

namespace Smolechoes.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Pathway> Pathways { get; set; } = null!;
        public DbSet<Point> Points { get; set; } = null!;
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
