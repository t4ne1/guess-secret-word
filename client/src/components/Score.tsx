import {makeStyles} from '@material-ui/core/styles';

type Props = {
  letterCount: number,
  guesses: string[],
  score: number
}

const useStyles = makeStyles({
  text: {
    fontWeight: 500
  },
  black: {
    color: 'black'
  },
  red: {
    color: 'red'
  }
});

const Score: React.FC<Props> = ({letterCount, guesses, score}) => {
  const classes = useStyles();

  return (
    <>
      <p className={`${classes.text} ${guesses.length < letterCount ? classes.black : classes.red}`}>
        Guesses left: {letterCount - guesses.length} / {letterCount}
      </p>
      <p className={classes.text}>Score: {score}</p>
    </>
  );
}

export default Score;