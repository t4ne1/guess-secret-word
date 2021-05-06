import {calculateScore, createMessage, hideUnguessedLetters} from './gameFunctions';
import {Message} from './gameFunctions'

export interface SecretWordObject {
  wordToGuess: string;
  letterCount: number;
  guesses: string[];
  message: Message;
  score: number;
  match: Boolean;
};

export default (secretWord: string, guesses: string[], input?: string): SecretWordObject => {
  const hiddenWord = hideUnguessedLetters(secretWord, guesses);
  const match = secretWord === input || secretWord === hiddenWord;
  return {
    wordToGuess: secretWord === input ? secretWord : hiddenWord,
    letterCount: new Set(secretWord).size,
    guesses,
    message: createMessage(secretWord, input),
    match,
    score: calculateScore(secretWord, guesses, match)
  }
}