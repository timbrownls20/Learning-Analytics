using LearningAnalytics.API.Model;
using Microsoft.EntityFrameworkCore;

namespace LearningAnalytics.API.Infrastructure
{
    public static class DatabaseInitialiser
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cohort>().HasData(
                new Cohort
                {
                    Id = 1,
                    Year = 2018,
                    DisplayName = "2018/2019"
                },
                new Cohort
                {
                    Id = 2,
                    Year = 2019,
                    DisplayName = "2019/2020"
                },
                new Cohort
                {
                    Id = 3,
                    Year = 2020,
                    DisplayName = "2020/2021"
                }
            );


            modelBuilder.Entity<Student>()
                //.OwnsOne(e => e.Cohort)
                .HasData(
                new 
                {
                    Id = 1,
                    FirstName = "William",
                    Surname = "Shakespeare",
                    CohortId = 1
                }
            );

        }

    }
}