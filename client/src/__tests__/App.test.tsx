import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders CircularProgress element and \'Set player name\' button while waiting for api', () => {
  render(<App />);
  
  const circularProgress = screen.getByRole(/progressbar/i);
  const setPlayerNameBtn = screen.getByText(/set player name/i);

  expect(circularProgress).toBeInTheDocument();
  expect(setPlayerNameBtn).toBeInTheDocument();
});