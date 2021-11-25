using System;

namespace API.Models
{
    public class MetodoPagamento
    {
        public int MetodoPagamentoId { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}