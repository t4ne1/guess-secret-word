import {render, screen} from '@testing-library/react';
import Game from '../Game';
import {SecretWordObject} from '../../interfaces/Interfaces'

const secretWord: SecretWordObject = {
  wordToGuess: '_i__a__',
  letterCount: new Set('library'.split('')).size,
  guesses: ['a', 'e', 'i'],
  message: {text: 'Well done! The letter I exists!', code: 'success'},
  score: 10,
  match: false
}
const handleLetterSelection = jest.fn();
const handleWordGuess = jest.fn();
const handleReset = jest.fn();

test('renders all the game components to the screen', () => {
  render(
    <Game
      secretWord={secretWord}
      handleLetterSelection={handleLetterSelection}
      handleWordGuess={handleWordGuess}
      handleReset={handleReset}
    />
  );

  const wordToGuess = screen.getByText('_ I _ _ A _ _');
  const message = screen.getByText('Well done! The letter I exists!');
  const guessesLeft = screen.getByText('Guesses left: 3 / 6');
  const score = screen.getByText('Score: 10');
  const btnA = screen.getByText('a');
  const guessTheWordBtn = screen.getByText('Guess the word');
  const tryAnotherBtn = screen.getByText('Try another');

  expect(wordToGuess).toBeInTheDocument();
  expect(message).toBeInTheDocument();
  expect(guessesLeft).toBeInTheDocument();
  expect(score).toBeInTheDocument();
  expect(btnA).toBeInTheDocument();
  expect(guessTheWordBtn).toBeInTheDocument();
  expect(tryAnotherBtn).toBeInTheDocument();
});