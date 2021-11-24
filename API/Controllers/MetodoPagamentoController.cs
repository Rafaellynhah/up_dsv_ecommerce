using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/metodo-pagamento")]
    public class MetodoPagamentoController : ControllerBase
    {
        private readonly DataContext _context;
        public MetodoPagamentoController(DataContext context)
        {
            _context = context;
        }

        //POST: api/metodo-pagamento/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] MetodoPagamento metodopagamento)
        {
            _context.MetodoPagamentos.Add(metodopagamento);
            _context.SaveChanges();
            return Created("", metodopagamento);
        }

        //GET: api/metodo-pagamento/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.MetodoPagamentos.ToList());

    }
}