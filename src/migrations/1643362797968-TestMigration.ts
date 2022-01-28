import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TestMigration1643362797968 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'test_table',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'username',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    queryRunner.clearSqlMemory();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('test_table');
  }
}
