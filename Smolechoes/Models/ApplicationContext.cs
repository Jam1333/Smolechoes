using Microsoft.EntityFrameworkCore;

namespace Smolechoes.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Pathway> Pathways { get; set; } = null!;
        public DbSet<Point> Points { get; set; } = null!;
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Pathway>().HasData(
                new Pathway() 
                { 
                    Id = 1,
                    Name = "Кости и сокровища IX-X веков на Смоленской земле",
                    Description = "Где находился древний город Смоленск? Как был найден первый средневековый клад в Гнездово? И при чем тут викинги? Предлагаем вам прослушать аудиоэкскурсию о событиях тысячелетней давности и самим во всем разобраться.",
                    ImgUrl = null
                },
                new Pathway()
                {
                    Id = 2,
                    Name = "Удивительные животные города Смоленска",
                    Description = "В разных уголках города Смоленска спрятались животные: благородный олень, хищные птицы, очень умный еж. Давайте попробуем отыскать их всех!",
                    ImgUrl = null
                });

            modelBuilder.Entity<Point>().HasData(
                new Point()
                {
                    Id = 1,
                    PathwayId = 1,
                    Name = "Музей-заповедник Гнездовское поселение X века",
                    Description = null,
                    Latitude = 54.785731,
                    Longitude = 31.879888,
                    AudioUrl = "./audios/BonesAndTreasure/1.1_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 2,
                    PathwayId = 1,
                    Name = "Курган Л13 Гороушна",
                    Description = null,
                    Latitude = 54.780820,
                    Longitude = 31.880209,
                    AudioUrl = "./audios/BonesAndTreasure/1.2_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 3,
                    PathwayId = 1,
                    Name = "Курган Л206 Щит",
                    Description = null,
                    Latitude = 54.780396,
                    Longitude = 31.876627,
                    AudioUrl = "./audios/BonesAndTreasure/1.3_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 4,
                    PathwayId = 1,
                    Name = "Курган Л207 Меч",
                    Description = null,
                    Latitude = 54.780397,
                    Longitude = 31.876898,
                    AudioUrl = "./audios/BonesAndTreasure/1.4_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 5,
                    PathwayId = 1,
                    Name = "Центральное селище",
                    Description = null,
                    Latitude = 54.780014,
                    Longitude = 31.874588,
                    AudioUrl = "./audios/BonesAndTreasure/1.5_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 6,
                    PathwayId = 1,
                    Name = "Центральное городище",
                    Description = null,
                    Latitude = 54.779221,
                    Longitude = 31.869762,
                    AudioUrl = "./audios/BonesAndTreasure/1.6_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 7,
                    PathwayId = 2,
                    Name = "Бронзовый рогатый",
                    Description = null,
                    Latitude = 54.782120,
                    Longitude = 32.047674,
                    AudioUrl = "./audios/AmazingAnimals/2.1_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 8,
                    PathwayId = 2,
                    Name = "Смоленские львята",
                    Description = null,
                    Latitude = 54.782170,
                    Longitude = 32.047728,
                    AudioUrl = "./audios/AmazingAnimals/2.2_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 9,
                    PathwayId = 2,
                    Name = "Памятник «Пес Полкан»",
                    Description = null,
                    Latitude = 54.783904,
                    Longitude = 32.047972,
                    AudioUrl = "./audios/AmazingAnimals/2.3_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 10,
                    PathwayId = 2,
                    Name = "Ученый Еж",
                    Description = null,
                    Latitude = 54.784327,
                    Longitude = 32.039653,
                    AudioUrl = "./audios/AmazingAnimals/2.4_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 11,
                    PathwayId = 2,
                    Name = "Орлы-защитники",
                    Description = null,
                    Latitude = 54.779072,
                    Longitude = 32.047272,
                    AudioUrl = "./audios/AmazingAnimals/2.5_out.m4a",
                    ImgUrl = null
                },
                new Point()
                {
                    Id = 12,
                    PathwayId = 2,
                    Name = "Кот Смоленский",
                    Description = null,
                    Latitude = 54.773436,
                    Longitude = 32.043419,
                    AudioUrl = "./audios/AmazingAnimals/2.6_out.m4a",
                    ImgUrl = null
                });

        }
    }
}
