import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
  disabledLetters: string[],
  handleLetterSelection: React.MouseEventHandler<HTMLButtonElement>
};

const useStyles = makeStyles({
  button: {
    margin: '0.25rem'
  }
});

const AlphabetButtons: React.FC<Props> = ({disabledLetters, handleLetterSelection}) => {
  const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const classes = useStyles();

  return (
    <>
      {englishAlphabet.map((letter) =>
        <Button
          className={classes.button}
          variant="outlined"
          key={letter}
          value={letter}
          onClick={handleLetterSelection}
          disabled={disabledLetters.includes(letter)}
        >{letter}</Button>
      )}
    </>
  );
};

export default AlphabetButtons;