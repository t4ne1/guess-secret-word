import {render, screen, fireEvent} from '@testing-library/react';
import GuessWord from '../GuessWord';

const handleWordGuess = jest.fn();

test('should open \'Guess the word\' modal on button click', () => {
  render(<GuessWord wordToGuess='_i__a__' handleWordGuess={handleWordGuess} />);
  const guessTheWordBtn = screen.getByText('Guess the word');

  fireEvent.click(guessTheWordBtn);

  const modalTitle = screen.getByText('Guess the word: _ I _ _ A _ _');
  const textField = screen.getByRole('textbox');
  const cancelBtn = screen.getByText('Cancel');
  const guessBtn = screen.getByText('Guess');

  expect(modalTitle).toBeInTheDocument();
  expect(textField).toBeInTheDocument();
  expect(cancelBtn).toBeInTheDocument();
  expect(guessBtn).toBeInTheDocument();
});

test('should open \'Guess the word\' modal and submit data', async () => {
  render(<GuessWord wordToGuess='_i__a__' handleWordGuess={handleWordGuess} />);
  const guessTheWordBtn = screen.getByText('Guess the word');

  fireEvent.click(guessTheWordBtn);

  const textField = screen.getByRole('textbox');
  const guessBtn = screen.getByText('Guess');

  fireEvent.change(textField, {target: {value: 'catalatic'} });
  fireEvent.click(guessBtn);

  expect(handleWordGuess).toHaveBeenCalledTimes(1);
  expect(handleWordGuess).toBeCalledWith('catalatic');
});