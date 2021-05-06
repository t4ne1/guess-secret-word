import request from "supertest";
import app, {secretWordForTesting as secretWord} from '../app';
import {deleteEntitiesByPlayerName} from '../controllers/gameController';
import createSecretWordObject from '../utils/createSecretWordObject';

const playerName = 'tester';
const letter = 'e';
const falseWord = 'electromagnet';
const secretWordObject1 = createSecretWordObject(secretWord, []);
const secretWordObject2 = createSecretWordObject(secretWord, [letter], letter);
const secretWordObject3 = createSecretWordObject(secretWord, [letter, falseWord], falseWord);
const secretWordObject4 = createSecretWordObject(secretWord, [letter, falseWord, secretWord], secretWord);

afterAll(() => deleteEntitiesByPlayerName(playerName));

describe('GET /word', () => {
  it('responds with status 200 and json data', (done) => {
    request(app)
      .get('/word')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, secretWordObject1, done);
  });
});

describe('POST /guess/:input', () => {
  it('letter as a input, responds with status 200 and respective json data', (done) => {
    request(app)
      .post(`/guess/${letter}`)
      .set('Accept', 'application/json')
      .set('player-name', playerName)
      .expect('Content-Type', /json/)
      .expect(200, secretWordObject2, done);
  });

    it('incorrect word as a input, responds with status 200 and respective json data', (done) => {
    request(app)
      .post(`/guess/${falseWord}`)
      .set('Accept', 'application/json')
      .set('player-name', playerName)
      .expect('Content-Type', /json/)
      .expect(200, secretWordObject3, done);
  });

  it('correct word as a input, responds with status 200 and respective json data', (done) => {
    request(app)
      .post(`/guess/${secretWord}`)
      .set('Accept', 'application/json')
      .set('player-name', playerName)
      .expect('Content-Type', /json/)
      .expect(200, secretWordObject4, done);
  });
});