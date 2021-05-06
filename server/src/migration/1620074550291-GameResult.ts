import {MigrationInterface, QueryRunner} from "typeorm";

export class GameResult1620074550291 implements MigrationInterface {
    name = 'GameResult1620074550291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `game_result` (`id` int NOT NULL AUTO_INCREMENT, `playerName` varchar(255) NOT NULL, `secretWord` varchar(255) NOT NULL, `guesses` text NOT NULL, `score` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `game_result`");
    }

}
