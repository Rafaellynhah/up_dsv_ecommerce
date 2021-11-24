using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.Categorias.AddRange(new Categoria[]
                {
                    new Categoria { CategoriaId = 1, Nome = "Bebida" },
                    new Categoria { CategoriaId = 2, Nome = "Chocolate"},
                }
            );
            _context.Produtos.AddRange(new Produto[]
                {
                    new Produto { ProdutoId = 1, Nome = "Heineken", Preco = 5, Quantidade = 10, CategoriaId = 1, Descricao = "Melhor cerveja"},
                    new Produto { ProdutoId = 2, Nome = "Sol", Preco = 3, Quantidade = 5, CategoriaId = 1, Descricao = "Bem mais ou menos" },
                    new Produto { ProdutoId = 3, Nome = "Kinder Ovo", Preco = 8, Quantidade = 6, CategoriaId = 2, Descricao = "Bom demais" },
                }
            );
            _context.MetodoPagamentos.AddRange(new MetodoPagamento[]
                {
                    new MetodoPagamento { MetodoPagamentoId = 1, Nome = "Cartão", Descricao = "Credito"},
                    new MetodoPagamento { MetodoPagamentoId = 2, Nome = "Cartão", Descricao = "Debito"},
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}