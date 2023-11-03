using Smolechoes.Models;
using Smolechoes.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Smolechoes.Services
{
    public class PathwayService : IPathwayService
    {
        ApplicationContext db;
        public PathwayService(ApplicationContext context)
        {
            db = context;
        }
        public Pathway Create(Pathway model)
        {
            db.Pathways.Add(model);
            db.SaveChanges();
            return model;
        }

        public void Delete(int id)
        {
            Pathway? pathway = db.Pathways.FirstOrDefault(p => p.Id == id);
            if (pathway == null) throw new NullReferenceException("There is no Pathways with such id.");
            db.Pathways.Remove(pathway);
            db.SaveChanges();
        }

        public Pathway Get(int id)
        {
            Pathway? pathway = db.Pathways.Include(p => p.Points).FirstOrDefault(p => p.Id == id);
            if (pathway == null) throw new NullReferenceException("There is no Pathways with such id.");
            return pathway;
        }

        public List<Pathway> GetAll()
        {
            List<Pathway> pathways = db.Pathways.Include(p => p.Points).ToList();
            return pathways;
        }

        public Pathway Update(Pathway model)
        {
            Pathway? pathway = db.Pathways.FirstOrDefault(p => p.Id == model.Id);
            if (pathway == null) throw new NullReferenceException("There is no Points with such id.");
            pathway.Name = model.Name;
            pathway.Description = model.Description;
            pathway.ImgUrl = model.ImgUrl;
            db.Update(pathway);
            db.SaveChanges();
            return pathway;
        }
    }
}
