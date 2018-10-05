using Microsoft.EntityFrameworkCore.Migrations;

namespace onboardor.Migrations
{
    public partial class OnboardingStepDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "OnboardingSteps");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "OnboardingSteps",
                nullable: true);
        }
    }
}
