import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserTable1666777724660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE users (id int NOT NULL, full_name varchar(255) NOT NULL)',
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
