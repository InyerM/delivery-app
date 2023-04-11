import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681179877138 implements MigrationInterface {
  name = "Migration1681179877138";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "UserLogin" DROP CONSTRAINT "FK_71f93ddc09caa60f69c5f622c3d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "UserLogin" DROP CONSTRAINT "REL_71f93ddc09caa60f69c5f622c3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "UserLogin" ADD CONSTRAINT "FK_71f93ddc09caa60f69c5f622c3d" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "UserLogin" DROP CONSTRAINT "FK_71f93ddc09caa60f69c5f622c3d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "UserLogin" ADD CONSTRAINT "REL_71f93ddc09caa60f69c5f622c3" UNIQUE ("userId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "UserLogin" ADD CONSTRAINT "FK_71f93ddc09caa60f69c5f622c3d" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
