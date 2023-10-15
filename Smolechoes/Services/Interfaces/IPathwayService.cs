using Smolechoes.Models;

namespace Smolechoes.Services.Interfaces
{
    public interface IPathwayService
    {
        Pathway Create(Pathway model);
        Pathway Update(Pathway model);
        Pathway Get(int id);
        List<Pathway> GetAll();
        void Delete(int id);
    }
}
