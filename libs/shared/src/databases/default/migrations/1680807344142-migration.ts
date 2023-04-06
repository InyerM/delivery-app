import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1680807344142 implements MigrationInterface {
  name = "Migration1680807344142";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "userType" SET DEFAULT 'EATER'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "userType" DROP DEFAULT`);
  }
}
