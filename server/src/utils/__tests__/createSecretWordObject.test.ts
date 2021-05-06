import createSecretWordObject from '../createSecretWordObject';

describe('utils.createSecretWordObject', () => {
  it('without inputs, should return correct object', () => {
    const result = createSecretWordObject('testing', []);
    expect(result).toEqual({
      wordToGuess: '_______',
      letterCount: 6,
      guesses: [],
      message: {text: '', code: 'info'},
      match: false,
      score: 0
    });
  });

  it('providing inputs, should return correct object', () => {
    const result = createSecretWordObject('testing', ['e', 'i', 'resting', 't', 'k'], 'k');
    expect(result).toEqual({
      wordToGuess: 'te_ti__',
      letterCount: 6,
      guesses: ['e', 'i', 'resting', 't', 'k'],
      message: {text: 'Too bad! There is no letter K!', code: 'warning'},
      match: false,
      score: 20
    });
  });

  it('providing correct secret word, should return correct object', () => {
    const result = createSecretWordObject('testing', ['e', 'i', 'resting', 't', 'k','testing'], 'testing');
    expect(result).toEqual({
      wordToGuess: 'testing',
      letterCount: 6,
      guesses: ['e', 'i', 'resting', 't', 'k','testing'],
      message: {text: 'Well done! You win!', code: 'success'},
      match: true,
      score: 50
    });
  });
});