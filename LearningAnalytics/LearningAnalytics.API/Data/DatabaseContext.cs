using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearningAnalytics.API.Infrastructure;
using Microsoft.EntityFrameworkCore;
using LearningAnalytics.API.Model;

namespace LearningAnalytics.API.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext (DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<Cohort> Cohorts { get; set; }

        public DbSet<Student> Students { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Database.EnsureCreated();
            
            base.OnModelCreating(modelBuilder);

            modelBuilder.RemovePluralizingTableNameConvention();

            modelBuilder.Entity<Cohort>(e =>
            {
                e.HasMany(e => e.Students)
                    //.WithOne(e => e.Cohort)
                    .WithOne()
                    .HasForeignKey(e => e.CohortId);
                    e.HasKey(e => e.Id);
                    e.Property(x => x.Id).ValueGeneratedOnAdd();
            });
                    
                

            //modelBuilder.Entity<Student>()
            //    .HasOne(e => e.StudentCohort)
            //    .WithMany()
            //    .HasForeignKey(e => e.CohortId)
            //    ;

            modelBuilder.Entity<Student>()
                .HasKey(e => e.Id);

            modelBuilder.Seed();
        }

        public void Migrate(string connectionString)
        {

        }
    }
}
