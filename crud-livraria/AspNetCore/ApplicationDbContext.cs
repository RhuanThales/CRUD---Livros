using Microsoft.EntityFrameworkCore;

namespace AspNetCore {
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    { }

    public DbSet<CrudLivros> CrudLivros { get; set; }
  }
}