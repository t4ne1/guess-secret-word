import {Button} from '@material-ui/core';
import Score from './Score';
import Message from './Message';
import AlphabetButtons from './AlphabetButtons';
import GuessWord from './GuessWord';
import GameOver from './GameOver';
import {SecretWordObject} from '../interfaces/Interfaces';

type Props = {
  secretWord: SecretWordObject,
  handleLetterSelection: React.MouseEventHandler<HTMLButtonElement>,
  handleWordGuess: Function,
  handleReset: React.MouseEventHandler<HTMLButtonElement>
};

const Game: React.FC<Props> = ({secretWord, handleLetterSelection, handleWordGuess, handleReset}) => {
  const {wordToGuess, letterCount, guesses, message, score, match} = secretWord;
  return (
    <>
      <h1>{wordToGuess.toUpperCase().split('').join(' ')}</h1>
      {message.text && <Message message={message}/>}
      <Score letterCount={letterCount} guesses={guesses} score={score}/>
      {!match && guesses.length < letterCount ?
        <div>
          <AlphabetButtons disabledLetters={guesses} handleLetterSelection={handleLetterSelection}/>
          <GuessWord wordToGuess={wordToGuess} handleWordGuess={handleWordGuess}/>
        </div>
      :
        <GameOver match={match} />
      }
      <Button
        variant="contained"
        color="default"
        size="large"
        onClick={handleReset}      
      >
        Try another
      </Button>
    </>
  );
}

export default Game;