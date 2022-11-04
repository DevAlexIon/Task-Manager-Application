import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertTestUser1667243022875 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "user" (id, username, email, password) VALUES('4','Alex','1@yahoo.com', '$2b$10$eBvQ1aFXYe30RL7INYBu0ekEAgy3cbFZIU1pqE.o6XC7lYdmrn/qO')`,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
