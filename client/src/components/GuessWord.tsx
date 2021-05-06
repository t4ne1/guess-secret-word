import {useState} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

type Props = {
  wordToGuess: string,
  handleWordGuess: Function
};

const useStyles = makeStyles({
  button: {
    margin: '1rem 0 0.5rem'
  },
  dialogActions: {
    padding: '0.5rem 1.5rem 1.5rem'
  }
});

const GuessWord:React.FC<Props> = ({wordToGuess, handleWordGuess}) => {
  const [guessWord, setGuessWord] = useState<String>('');
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuessWord(e.currentTarget.value.toLowerCase().replace(/[^a-z]/ig, ''));
  };

  const handleSubmit = () => {
    handleWordGuess(guessWord);
    setGuessWord('');
    handleClose();
  }

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClickOpen}      
      >
        Guess the word
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">
          Guess the word: {wordToGuess.toUpperCase().split('').join(' ')}
        </DialogTitle>
        
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-full-width"
              label="Your guess..."
              variant="outlined"
              fullWidth
              autoFocus
              value={guessWord}
              onChange={handleChange}
            />
          </form>
        </DialogContent>

        <DialogActions className={classes.dialogActions}>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={guessWord.length < 2}
          >
            Guess
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GuessWord;