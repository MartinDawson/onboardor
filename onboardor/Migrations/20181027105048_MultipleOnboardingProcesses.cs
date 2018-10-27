using Microsoft.EntityFrameworkCore.Migrations;

namespace onboardor.Migrations
{
    public partial class MultipleOnboardingProcesses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "MemberId",
                table: "OnboardingProcesses",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OnboardingProcesses_MemberId",
                table: "OnboardingProcesses",
                column: "MemberId");

            migrationBuilder.AddForeignKey(
                name: "FK_OnboardingProcesses_Members_MemberId",
                table: "OnboardingProcesses",
                column: "MemberId",
                principalTable: "Members",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OnboardingProcesses_Members_MemberId",
                table: "OnboardingProcesses");

            migrationBuilder.DropIndex(
                name: "IX_OnboardingProcesses_MemberId",
                table: "OnboardingProcesses");

            migrationBuilder.DropColumn(
                name: "MemberId",
                table: "OnboardingProcesses");

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
    }
}
