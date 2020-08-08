using System;
using LearningAnalytics.API.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace LearningAnalytics.Migration
{
    public class ConsoleStartup
    {
        public ConsoleStartup()
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            Console.WriteLine("TB Test 1");
            Console.WriteLine(Configuration.GetConnectionString("LearningAnalyticsAPIContext"));
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DatabaseContext>(options =>
            {
                options.UseMySql(Configuration.GetConnectionString("LearningAnalyticsAPIContext"));

            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
       
        }
    }
}
