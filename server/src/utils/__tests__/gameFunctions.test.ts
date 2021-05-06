import {calculateScore, createMessage, hideUnguessedLetters} from '../gameFunctions';

describe('utils.gameFunctions.calculateScore', () => {
  it('without inputs, should return correct score', () => {
    const result = calculateScore('development', [], false);
    expect(result).toBe(0);
  });

  it('providing inputs, should return correct score', () => {
    const result = calculateScore('development', ['a', 'e', 'i', 'k', 'l', 'm'], false);
    expect(result).toBe(25);
  });

  it('providing correct secret word, should return correct score', () => {
    const result = calculateScore('development', ['a', 'e', 'i', 'k', 'l', 'm', 'development'], true);
    expect(result).toBe(85);
  });
});

describe('utils.gameFunctions.createMessage', () => {
  it('without input, should return correct message', () => {
    const result = createMessage('development');
    expect(result).toEqual({text: '', code: 'info'});
  });

  it('providing incorrect letter, should return correct message', () => {
    const result = createMessage('development', 'a');
    expect(result).toEqual({text: 'Too bad! There is no letter A!', code: 'warning'});
  });

  it('providing correct letter, should return correct message', () => {
    const result = createMessage('development', 'e');
    expect(result).toEqual({text: 'Well done! The letter E exists!', code: 'success'});
  });

  it('providing incorrect word, should return correct message', () => {
    const result = createMessage('development', 'improvement');
    expect(result).toEqual({text: 'You guessed wrong word!', code: 'warning'});
  });

  it('providing correct word, should return correct message', () => {
    const result = createMessage('development', 'development');
    expect(result).toEqual({text: 'Well done! You win!', code: 'success'});
  });
});

describe('utils.gameFunctions.hideUnguessedLetters', () => {
  it('without inpust, should return fully covered word', () => {
    const result = hideUnguessedLetters('development', []);
    expect(result).toBe('___________');
  });

  it('providing some inputs, should return partially covered word', () => {
    const result = hideUnguessedLetters('development', ['a', 'e', 'i', 'k', 'l', 'm']);
    expect(result).toBe('_e_el__me__');
  });

  it('providing correct inputs, should return uncovered word', () => {
    const uniqueLetters = Array.from(new Set('development'.split('')));
    const result = hideUnguessedLetters('development', uniqueLetters);
    expect(result).toBe('development');
  });
});