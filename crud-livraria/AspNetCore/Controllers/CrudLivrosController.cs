using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetCore.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CrudLivrosController : ControllerBase
  {
    private readonly ApplicationDbContext _dbContext;

    public CrudLivrosController(ApplicationDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    // GET api/crudlivros
    [HttpGet]
    public async Task<ActionResult<List<CrudLivro>>> Get()
    {
      return await _dbContext.CrudLivros.ToListAsync();
    }

    // GET api/crudlivros/5
    [HttpGet("{id}")]
    public async Task<ActionResult<CrudLivro>> Get(string id)
    {
      return await _dbContext.CrudLivros.FindAsync(id);
    }

    // POST api/crudlivros
    [HttpPost]
    public async Task Post(CrudLivro model)
    {
      await _dbContext.AddAsync(model);
      
      await _dbContext.SaveChangesAsync();
    }

    // PUT api/crudlivros/5
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(string id, CrudLivro model)
    {
      var exists = await _dbContext.CrudLivros.AnyAsync(f => f.Id == id);
      if (!exists)
      {
        return NotFound();
      }

      _dbContext.CrudLivros.Update(model);
      
      await _dbContext.SaveChangesAsync();

      return Ok();

    }

    // DELETE api/crudlivros/5
    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(string id)
    {
      var entity = await _dbContext.CrudLivros.FindAsync(id);

      _dbContext.CrudLivros.Remove(entity);
      
      await _dbContext.SaveChangesAsync();
      
      return Ok();
    }
  }
}