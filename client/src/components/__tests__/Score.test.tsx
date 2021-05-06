import {render, screen} from '@testing-library/react';
import Score from '../Score';

test('renders \'Guesses left\' and current score', () => {
  render(<Score letterCount={7} guesses={['a', 'e', 'i', 'o']} score={15} />);
  const guessesLeft = screen.getByText('Guesses left: 3 / 7');
  const score = screen.getByText('Score: 15');

  expect(guessesLeft).toBeInTheDocument();
  expect(score).toBeInTheDocument();
});