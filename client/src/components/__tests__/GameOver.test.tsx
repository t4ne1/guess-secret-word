import {render, screen} from '@testing-library/react';
import GameOver from '../GameOver';

test('renders \'Game over!\' text', () => {
  render(<GameOver match={false} />);
  const gameStatusText = screen.getByText('Game over!');

  expect(gameStatusText).toBeInTheDocument();
});

test('renders \'You win!\' text', () => {
  render(<GameOver match={true} />);
  const gameStatusText = screen.getByText('You win!');

  expect(gameStatusText).toBeInTheDocument();
});