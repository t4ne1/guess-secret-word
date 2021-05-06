import {Request, Response} from "express";
import {Connection, Repository, createConnection, getConnection} from "typeorm";
import {GameResult} from '../entity/GameResult';
import {SecretWordObject} from '../utils/createSecretWordObject';

interface GameResultObject {
  playerName : string,
  secretWord: string,
  guesses: string[],
  score: number
};

export const saveGameResultIfMatch = async (req: Request, res: Response, secretWordObject: SecretWordObject) => {
  const gameWin = secretWordObject.match;
  if (gameWin) {
    const gameResultObject: GameResultObject = {
      playerName: req.header('player-name') || 'nameless',
      secretWord: secretWordObject.wordToGuess,
      guesses: secretWordObject.guesses,
      score: secretWordObject.score
    };

    createConnection().then(async (connection: Connection) => {
      const gameResultRepository: Repository<GameResult> = connection.getRepository(GameResult);
      const gameResult = gameResultRepository.create(gameResultObject);
      await gameResultRepository.save(gameResult);
      await connection.close();
      res.status(200).json(secretWordObject);
    }).catch((error) => console.log('gameController.saveGameResultIfMatch:', error.message));
  } else {
    res.status(200).json(secretWordObject);
  };
};

export const deleteEntitiesByPlayerName = async (playerName: string) => {
  await createConnection();
  getConnection()
    .createQueryBuilder()
    .delete()
    .from(GameResult)
    .where("playerName = :playerName", { playerName })
    .execute();
};