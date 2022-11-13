import { MigrationInterface, QueryRunner } from 'typeorm';

export class createBoardsTable1668153664799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "boards" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" integer)',
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "boards"`);
  }
}
