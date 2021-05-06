import {useState, useEffect} from 'react';
import {Snackbar, SnackbarContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {MessageObject} from '../interfaces/Interfaces';

type Props = {
  message: MessageObject
};

const useStyles = makeStyles({
  text: {
    color: '#fff',
    fontWeight: 500,
  },
  success: {
    backgroundColor: '#388e3c'
  },
  info: {
    backgroundColor: '#1976d2'
  },
  warning: {
    backgroundColor: '#f57c00'
  }
});

const Message: React.FC<Props> = ({message}) => {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  const handleClose = () => setOpen(false);

  useEffect(() => setOpen(true), [message]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={1500} 
      onClose={handleClose}
    >
      <SnackbarContent
        className={`${classes.text} ${classes[message.code]}`}
        message={message.text}
      />
    </Snackbar>
  );
}

export default Message;