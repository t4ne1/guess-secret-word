import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Container, CircularProgress} from '@material-ui/core';
import PlayerName from './components/PlayerName';
import Game from './components/Game';
import {SecretWordObject} from './interfaces/Interfaces';
import fetchData from './helpers/fetchData';
import './App.css';

function App() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [playerName, setPlayerName] = useState<string>(localStorage.getItem('playerName') || '');
  const [secretWord, setSecretWord] = useState<SecretWordObject>({
    wordToGuess: '',
    letterCount: 0,
    guesses: [],
    message: {text: '', code: 'info'},
    match: false ,
    score: 0
  });
 
  const savePlayerName = (name: string) => {
    localStorage.setItem('playerName', name);
    setPlayerName(name);
  }

  const removePlayerName = () => {
    localStorage.removeItem('playerName');
    setPlayerName('');
  }

  const getSecretWord = async () => {
    setLoading(true);
    const result = await fetchData('GET', 'http://localhost:5000/word');
    setSecretWord(result);
    setLoading(false);
  }; 

  const guessLetter = async (e: React.MouseEvent<HTMLElement>) => {
    const letter = (e.currentTarget as HTMLButtonElement).value;
    const result = await fetchData('POST', `http://localhost:5000/guess/${letter}`);
    setSecretWord(result);
  };

  const guessWord = async (word: string) => {
    const result = await fetchData('POST', `http://localhost:5000/guess/${word}`);
    setSecretWord(result);
  };

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="App">
      <Container maxWidth="md">
        <Router>
          {!loading ?
            <Switch>
              <Route exact path="/">
                <Game
                  secretWord={secretWord}
                  handleLetterSelection={guessLetter}
                  handleWordGuess={guessWord}
                  handleReset={getSecretWord}
                />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
            :
            <CircularProgress />
          }
        </Router>
        <PlayerName playerName={playerName} handleSubmitPlayerName={savePlayerName} handleRemovePlayerName={removePlayerName}/>
      </Container>
    </div>
  );
}

export default App;