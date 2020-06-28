using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LearningAnalytics.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cohort",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Year = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cohort", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Student",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Registration = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    CohortId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Student_Cohort_CohortId",
                        column: x => x.CohortId,
                        principalTable: "Cohort",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Cohort",
                columns: new[] { "Id", "DisplayName", "Year" },
                values: new object[] { 1, "2018/2019", 2018 });

            migrationBuilder.InsertData(
                table: "Cohort",
                columns: new[] { "Id", "DisplayName", "Year" },
                values: new object[] { 2, "2019/2020", 2019 });

            migrationBuilder.InsertData(
                table: "Cohort",
                columns: new[] { "Id", "DisplayName", "Year" },
                values: new object[] { 3, "2020/2021", 2020 });

            migrationBuilder.InsertData(
                table: "Student",
                columns: new[] { "Id", "CohortId", "FirstName", "Registration", "Surname" },
                values: new object[] { 1, 1, "William", null, "Shakespeare" });

            migrationBuilder.CreateIndex(
                name: "IX_Student_CohortId",
                table: "Student",
                column: "CohortId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Student");

            migrationBuilder.DropTable(
                name: "Cohort");
        }
    }
}
