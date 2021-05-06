import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class GameResult {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    playerName: string;

    @Column()
    secretWord: string;

    @Column('simple-json')
    guesses: string[];

    @Column()
    score: number;
}