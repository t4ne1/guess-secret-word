export const calculateScore = (word: string, guesses: string[], match) => {
  let letterPoints = 0;
  let wordPoints = 0;
  word.split('').forEach((letter) => {
    if (guesses.includes(letter)) letterPoints += 5;
    if (!guesses.includes(letter)) wordPoints += 10;
  });
  if (match) return letterPoints + wordPoints;
  return letterPoints;
};

export interface Message {
  text: string,
  code: 'warning' | 'info' | 'success'
};

export const createMessage = (word: string, input?: string): Message => {
  if (!input) return {text: '', code: 'info'};
  const wordInput = input.length > 1 && input;
  if (wordInput === word) return {text: 'Well done! You win!', code: 'success'};
  if (wordInput && wordInput !== word) return {text: 'You guessed wrong word!', code: 'warning'};
  if (word.includes(input)) return {text: `Well done! The letter ${input.toUpperCase()} exists!`, code: 'success'};
  return {text: `Too bad! There is no letter ${input.toUpperCase()}!`, code: 'warning'};
}

export const hideUnguessedLetters = (word: string, guesses: string[]) => {
  let hiddenWord = '';
  word.split('').forEach((letter) => hiddenWord += guesses.includes(letter) ? letter : '_');
  return hiddenWord
};