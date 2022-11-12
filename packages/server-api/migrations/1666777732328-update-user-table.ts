import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateUserTable1666777732328 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user"  ADD "email" character varying UNIQUE NOT NULL, ADD "password" character varying NOT NULL`,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
