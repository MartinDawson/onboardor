using Microsoft.EntityFrameworkCore.Migrations;

namespace onboardor.Migrations
{
    public partial class MemberProcess : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OnboardingProcessId",
                table: "Members",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Members_OnboardingProcessId",
                table: "Members",
                column: "OnboardingProcessId");

            migrationBuilder.AddForeignKey(
                name: "FK_Members_OnboardingProcesses_OnboardingProcessId",
                table: "Members",
                column: "OnboardingProcessId",
                principalTable: "OnboardingProcesses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Members_OnboardingProcesses_OnboardingProcessId",
                table: "Members");

            migrationBuilder.DropIndex(
                name: "IX_Members_OnboardingProcessId",
                table: "Members");

            migrationBuilder.DropColumn(
                name: "OnboardingProcessId",
                table: "Members");
        }
    }
}
