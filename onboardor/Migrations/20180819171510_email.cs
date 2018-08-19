using Microsoft.EntityFrameworkCore.Migrations;

namespace onboardor.Migrations
{
    public partial class email : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Members");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Members",
                nullable: false,
                defaultValue: "");
        }
    }
}
