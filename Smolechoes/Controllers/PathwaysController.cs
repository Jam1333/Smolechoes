using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Smolechoes.Models;
using Smolechoes.Services.Interfaces;

namespace Smolechoes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PathwaysController : ControllerBase
    {
        private readonly IPathwayService _pathwayService;
        public PathwaysController(IPathwayService pathwayService)
        {
            _pathwayService = pathwayService;
        }

        [HttpPost]
        public Pathway Create(Pathway model)
        {
            return _pathwayService.Create(model);
        }

        [HttpPut]
        public Pathway Update(Pathway model)
        {
            return _pathwayService.Update(model);
        }

        [HttpGet("{id}")]
        public Pathway Get(int id)
        {
            return _pathwayService.Get(id);
        }

        [HttpGet]
        public IEnumerable<Pathway> GetAll()
        {
            return _pathwayService.GetAll();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _pathwayService.Delete(id);
            return Ok();
        }
    }
}
