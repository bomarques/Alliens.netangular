using System;
using System.Collections.Generic;

namespace Alliens.Models
{
    public partial class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Endereço { get; set; }
        public string Codigo { get; set; }
    }
}
