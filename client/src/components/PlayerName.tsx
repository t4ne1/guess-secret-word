import {useState} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

type Props = {
  playerName: string,
  handleSubmitPlayerName: Function,
  handleRemovePlayerName: React.MouseEventHandler<HTMLButtonElement>
};

const useStyles = makeStyles({
  position: {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%, -50%)'
  },
  button: {
    margin: '1rem 0 0.5rem'
  },
  dialogActions: {
    padding: '0.5rem 1.5rem 1.5rem'
  }
});

const PlayerName:React.FC<Props> = ({playerName, handleSubmitPlayerName, handleRemovePlayerName}) => {
  const [newPlayerName, setNewPlayerName] = useState<String>('');
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlayerName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = () => {
    handleSubmitPlayerName(newPlayerName);
    handleClose();
  }

  return (
    <div className={classes.position}>
      <Button
        className={classes.button}
        color="default"
        size="small"
        onClick={playerName ? handleRemovePlayerName : handleClickOpen}      
      >
        {playerName ? `${playerName} (Remove player)` : 'Set player name'}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">
          Player name
        </DialogTitle>

        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-full-width"
              label="Enter layer name"
              variant="outlined"
              fullWidth
              autoFocus
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
            disabled={newPlayerName.length < 2}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PlayerName;