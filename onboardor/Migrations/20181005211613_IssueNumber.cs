using Microsoft.EntityFrameworkCore.Migrations;

namespace onboardor.Migrations
{
    public partial class IssueNumber : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AccessToken",
                table: "Members");

            migrationBuilder.RenameColumn(
                name: "IssueId",
                table: "OnboardingSteps",
                newName: "IssueNumber");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IssueNumber",
                table: "OnboardingSteps",
                newName: "IssueId");

            migrationBuilder.AddColumn<string>(
                name: "AccessToken",
                table: "Members",
                nullable: false,
                defaultValue: "");
        }
    }
}
