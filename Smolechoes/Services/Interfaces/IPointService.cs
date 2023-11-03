using Smolechoes.Models;

namespace Smolechoes.Services.Interfaces
{
    public interface IPointService
    {
        Point Create(Point model);
        Point Update(Point model);
        Point Get(int id);
        List<Point> GetAll();
        void Delete(int id);
    }
}
