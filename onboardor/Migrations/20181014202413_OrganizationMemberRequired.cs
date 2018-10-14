using Microsoft.EntityFrameworkCore.Migrations;

namespace onboardor.Migrations
{
    public partial class OrganizationMemberRequired : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationMember_Members_MemberId",
                table: "OrganizationMember");

            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationMember_Organizations_OrganizationId",
                table: "OrganizationMember");

            migrationBuilder.AlterColumn<int>(
                name: "OrganizationId",
                table: "OrganizationMember",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "MemberId",
                table: "OrganizationMember",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationMember_Members_MemberId",
                table: "OrganizationMember",
                column: "MemberId",
                principalTable: "Members",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationMember_Organizations_OrganizationId",
                table: "OrganizationMember",
                column: "OrganizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationMember_Members_MemberId",
                table: "OrganizationMember");

            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationMember_Organizations_OrganizationId",
                table: "OrganizationMember");

            migrationBuilder.AlterColumn<int>(
                name: "OrganizationId",
                table: "OrganizationMember",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "MemberId",
                table: "OrganizationMember",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationMember_Members_MemberId",
                table: "OrganizationMember",
                column: "MemberId",
                principalTable: "Members",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationMember_Organizations_OrganizationId",
                table: "OrganizationMember",
                column: "OrganizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
