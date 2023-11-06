using Microsoft.Extensions.Caching.Memory;
using Smolechoes.Models;
using Smolechoes.Services.Interfaces;

namespace Smolechoes.Services
{
    public class PointService : IPointService
    {
        ApplicationContext db;
        public PointService(ApplicationContext context)
        {
            db = context;
        }
        public Point Create(Point model)
        {
            db.Points.Add(model);
            db.SaveChanges();
            return model;
        }

        public void Delete(int id)
        {
            Point? point = db.Points.FirstOrDefault(p => p.Id == id);
            if (point == null) throw new NullReferenceException("There is no Points with such id.");
            db.Points.Remove(point);
            db.SaveChanges();
        }

        public Point Get(int id)
        {
            Point? point = db.Points.FirstOrDefault(p => p.Id == id);
            if(point == null) throw new NullReferenceException("There is no Points with such id.");
            return point;
        }

        public List<Point> GetAll()
        {
            List<Point> points = db.Points.ToList();
            return points;
        }

        public Point Update(Point model)
        {
            Point? point = db.Points.FirstOrDefault(p => p.Id == model.Id);
            if (point == null) throw new NullReferenceException("There is no Points with such id.");
            point.Name = model.Name;
            point.Description = model.Description;
            point.AudioUrl = model.AudioUrl;
            point.ImgUrl = model.ImgUrl;
            db.Update(point);
            db.SaveChanges();
            return point;
        }
    }
}
