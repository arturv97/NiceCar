using Microsoft.EntityFrameworkCore;
using ProjetoVerzel.Entities;

namespace ProjetoVerzel.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Marca>? Marcas { get; set; }
        public DbSet<Modelo>? Modelos { get; set; }
        public DbSet<Descricao>? Descricoes { get; set; }
    }
}
