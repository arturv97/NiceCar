using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjetoVerzel.Entities
{
    [Table("Marca")]
    public class Marca
    {
        [Key]
        public Guid Id { get; set; }

        [Required, StringLength(50)]
        public string? Nome { get; set; }

        public virtual List<Modelo>? Modelos { get; set; }
    }
}
