using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "SpeedwayRiderTotalRecords",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Point = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Bonus = table.Column<int>(type: "int", nullable: false),
                    Match = table.Column<int>(type: "int", nullable: false),
                    Race = table.Column<int>(type: "int", nullable: false),
                    FullPerfect = table.Column<int>(type: "int", nullable: false),
                    PaidPerfect = table.Column<int>(type: "int", nullable: false),
                    Crash = table.Column<int>(type: "int", nullable: false),
                    Defect = table.Column<int>(type: "int", nullable: false),
                    Exclude = table.Column<int>(type: "int", nullable: false),
                    Tape = table.Column<int>(type: "int", nullable: false),
                    First = table.Column<int>(type: "int", nullable: false),
                    Second = table.Column<int>(type: "int", nullable: false),
                    Third = table.Column<int>(type: "int", nullable: false),
                    Fourth = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpeedwayRiderTotalRecords", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpeedwayRiderTotalRecords");
        }
    }
}
