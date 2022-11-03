using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography.Xml;

namespace ProjetoVerzel.Entities
{
    [Table("Modelo")]
    public class Modelo
    {
        [Key]
        public Guid Id { get; set; }

        [Required, StringLength(25)]
        public string? Nome { get; set; }

        [ForeignKey("Marca")]
        public int MarcaId { get; set; }
        public virtual Marca? Marca { get; set; }

        public virtual List<Descricao>? Descricoes { get; set; }
    }
}
