using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjetoVerzel.Entities
{
    [Table("Descricao")]
    public class Descricao
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public int Ano { get; set; }

        [Required, StringLength(15)]
        public string? Cor { get; set; }

        [Required, StringLength(15)]
        public string? Combustivel { get; set; }

        [Required]
        public double Money { get; set; }

        [Required]
        public string? Foto { get; set; }

        [ForeignKey("Modelo")]
        public int ModeloId { get; set; }
        public virtual Modelo? Modelo { get; set; }
    }
}
