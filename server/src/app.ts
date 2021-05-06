import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import randomWord from 'random-word';
import {saveGameResultIfMatch} from './controllers/gameController';
import createSecretWordObject from './utils/createSecretWordObject';

const app: Application = express();
app.use(express.json());
app.use(cors());

let secretWord: string;
let guesses: string[] = [];
export const secretWordForTesting = 'electroplating';

app.get('/word', (req: Request, res: Response) => {
  secretWord = randomWord();
  guesses = [];

  // Uses specific word when testing
  if (process.env.NODE_ENV === 'test') secretWord = secretWordForTesting;

  // For easier manual testing, logs secret word to console
  console.log('Secret word:', secretWord);

  const secretWordObject = createSecretWordObject(secretWord, guesses);
  res.status(200).json(secretWordObject);
});

app.post('/guess/:input', async (req: Request, res: Response) => {
  try {
    const { input } = req.params;
    guesses.push(input);

    const secretWordObject = createSecretWordObject(secretWord, guesses, input);
    saveGameResultIfMatch(req, res, secretWordObject);
  } catch (error) {
    console.log('/guess/:input', error.message);
  }
});

export default app;