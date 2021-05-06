import {render, screen} from '@testing-library/react';
import Message from '../Message';
import {MessageObject} from '../../interfaces/Interfaces';

const message: MessageObject = {text: 'Well done! The letter I exists!', code: 'success'};

test('renders game message', () => {
  render(<Message message={message}/>);
  const gameMessage = screen.getByText('Well done! The letter I exists!');

  expect(gameMessage).toBeInTheDocument();
});