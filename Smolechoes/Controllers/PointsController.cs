using Microsoft.AspNetCore.Mvc;
using Smolechoes.Models;
using Smolechoes.Services.Interfaces;

namespace Smolechoes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PointsController : ControllerBase
    {
        private readonly IPointService _pointService;
        public PointsController(IPointService pointService)
        {
            _pointService = pointService;
        }

        [HttpPost]
        public Point Create(Point model)
        {
            return _pointService.Create(model);
        }

        [HttpPut]
        public Point Update(Point model)
        {
            return _pointService.Update(model);
        }

        [HttpGet("{id}")]
        public Point Get(int id)
        {
            return _pointService.Get(id);
        }

        [HttpGet]
        public IEnumerable<Point> GetAll()
        {
            return _pointService.GetAll();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _pointService.Delete(id);
            return Ok();
        }
    }
}
