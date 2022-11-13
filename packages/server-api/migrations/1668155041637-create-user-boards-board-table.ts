import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserBoardsBoardTable1668155041637
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "user_board_boards" ("userId" integer NOT NULL, "boardsId" integer NOT NULL)',
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user_boards_board"`);
  }
}
