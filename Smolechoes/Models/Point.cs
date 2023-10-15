namespace Smolechoes.Models
{
    public class Point
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? ImgUrl { get; set; }
        public string? AudioUrl { get; set; }
        public int RouteId { get; set; }
        public Pathway? Route { get; set; }
    }
}
