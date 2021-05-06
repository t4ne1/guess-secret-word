# Guess the secret word

## Steps to run backend:

1. Run `cd server` command
2. Run `npm i` command
3. Setup database settings inside `.env` file
4. Run `npm run create-db` command
5. Run `npm run migration:run` command
6. Run `npm start` command

For testing:
Run `npm run test`
or `npm run test:coverag`

## Steps to run frontend:

1. Run `cd client` command
2. Run `npm i` command
3. Run `npm start` command

For testing:
Run `npm test` or `npm run test:coverage`

## Game rules:

- The player can enter his/her name or play anonymously.
- The player gets to guess random english word.
- If the player guesses the correct letter, the player gets 5 points for each instance.
- If a player guesses the whole word, each unguessed letter gives 10 points.
- If player wins, the result will be saved to database.

For development purposes, the secret word can be seen on console.

The game logic could be improved, the game is a bit difficult at the moment.
