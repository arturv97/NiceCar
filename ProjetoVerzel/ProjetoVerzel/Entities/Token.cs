using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoVerzel.Entities
{
    [Table("Token")]
    public class Token
    {
        [Key]
        public Guid Id { get; set; }

    }
}