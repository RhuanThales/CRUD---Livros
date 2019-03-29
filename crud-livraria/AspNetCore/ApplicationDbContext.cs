using Microsoft.EntityFrameworkCore;

namespace AspNetCore 
{
  public class ApplicationDbContext : DbContext
  {
    public DbSet<CrudLivro> CrudLivros { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
      : base(options)
    { } 
  }
}