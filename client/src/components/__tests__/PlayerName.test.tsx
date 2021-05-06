import {render, screen, fireEvent} from '@testing-library/react';
import PlayerName from '../PlayerName';

const playerName = 'Taavi';
const handleSubmitPlayerName = jest.fn();
const handleRemovePlayerName = jest.fn();

test('renders button with text \'Set player name\', opens modal on click', () => {
  render(<PlayerName playerName="" handleSubmitPlayerName={handleSubmitPlayerName} handleRemovePlayerName={handleRemovePlayerName} />);
  const setPlayerNameBtn = screen.getByText('Set player name');

  fireEvent.click(setPlayerNameBtn);

  const modalTitle = screen.getByText('Player name');
  const textField = screen.getByRole('textbox');
  const cancelBtn = screen.getByText('Cancel');
  const submitBtn = screen.getByText('Submit');

  expect(modalTitle).toBeInTheDocument();
  expect(textField).toBeInTheDocument();
  expect(cancelBtn).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

test('opens modal and submits player name', () => {
  render(<PlayerName playerName="" handleSubmitPlayerName={handleSubmitPlayerName} handleRemovePlayerName={handleRemovePlayerName} />);
  const setPlayerNameBtn = screen.getByText('Set player name');

  fireEvent.click(setPlayerNameBtn);

  const textField = screen.getByRole('textbox');
  const submitBtn = screen.getByText('Submit');

  fireEvent.change(textField, {target: {value: playerName} });
  fireEvent.click(submitBtn);

  expect(handleSubmitPlayerName).toHaveBeenCalledTimes(1);
  expect(handleSubmitPlayerName).toBeCalledWith(playerName.toLowerCase());
});

test('renders button with text \'<playerName> (Remove player)\', removes player on click', () => {
  render(<PlayerName playerName={playerName} handleSubmitPlayerName={handleSubmitPlayerName} handleRemovePlayerName={handleRemovePlayerName} />);
  const removePlayerNameBtn = screen.getByText(`${playerName} (Remove player)`);

  expect(removePlayerNameBtn).toBeInTheDocument();

  fireEvent.click(removePlayerNameBtn);

  expect(handleRemovePlayerName).toHaveBeenCalledTimes(1);
});