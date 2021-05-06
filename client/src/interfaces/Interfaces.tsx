export interface SecretWordObject {
  wordToGuess: string;
  letterCount: number;
  guesses: string[];
  message: {text: string, code: 'success' | 'info' | 'warning'};
  score: number;
  match: boolean;
};

export interface MessageObject {
  text: string,
  code: 'success' | 'info' | 'warning'
}