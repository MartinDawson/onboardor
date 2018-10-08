using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace onboardor.Migrations
{
    public partial class OnboardingProcess : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OnboardingProcessId",
                table: "OnboardingPipelines",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OnboardingProcesses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    OrganizationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OnboardingProcesses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OnboardingProcesses_Organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalTable: "Organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OnboardingPipelines_OnboardingProcessId",
                table: "OnboardingPipelines",
                column: "OnboardingProcessId");

            migrationBuilder.CreateIndex(
                name: "IX_OnboardingProcesses_OrganizationId",
                table: "OnboardingProcesses",
                column: "OrganizationId");

            migrationBuilder.AddForeignKey(
                name: "FK_OnboardingPipelines_OnboardingProcesses_OnboardingProcessId",
                table: "OnboardingPipelines",
                column: "OnboardingProcessId",
                principalTable: "OnboardingProcesses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OnboardingPipelines_OnboardingProcesses_OnboardingProcessId",
                table: "OnboardingPipelines");

            migrationBuilder.DropTable(
                name: "OnboardingProcesses");

            migrationBuilder.DropIndex(
                name: "IX_OnboardingPipelines_OnboardingProcessId",
                table: "OnboardingPipelines");

            migrationBuilder.DropColumn(
                name: "OnboardingProcessId",
                table: "OnboardingPipelines");
        }
    }
}
