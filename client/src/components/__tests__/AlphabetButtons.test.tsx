import {render, screen, fireEvent} from '@testing-library/react';
import AlphabetButtons from '../AlphabetButtons';

const handleLetterSelection = jest.fn();

test('renders 26 buttons of english alphabet', async () => {
  render(<AlphabetButtons disabledLetters={[]} handleLetterSelection={handleLetterSelection}/>);
  const btnA = screen.getByText('a');
  const btnZ = screen.getByText('z');
  const allBtns = await screen.findAllByRole('button');

  expect(btnA).toBeInTheDocument();
  expect(btnZ).toBeInTheDocument();
  expect(allBtns).toHaveLength(26);
});

test('should call function on button click', () => {
  render(<AlphabetButtons disabledLetters={[]} handleLetterSelection={handleLetterSelection}/>);
  const btnA = screen.getByText('a');

  expect(btnA).toBeInTheDocument();
  fireEvent.click(btnA);
  expect(handleLetterSelection).toHaveBeenCalledTimes(1);
});