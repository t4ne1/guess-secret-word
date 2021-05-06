import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    fontWeight: 500
  }
});

type Props = {
  match: boolean
}

const GameOver: React.FC<Props> = ({match}) => {
  const classes = useStyles();

  return <p className={classes.text}>{match ? 'You win!' : 'Game over!'}</p>;
}

export default GameOver;