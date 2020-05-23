const app = require('./app');
const supertest = require('supertest');
const request = supertest(app); // arrange

test('get the guessCharacterGenericException endpoint', async done => {
    const responde = await request.get('/guessCharacterGenericException?characterToGuess=1523&character=2510') // Act
    expect(responde.status).toBe(200);
    expect(responde.type).toBe('application/json');
    expect(responde.body.result).not.toBeNull();
    expect(responde.body.result).toBe('X__');
    done();
});

test('get the guessCharacter endpoint', async done => {
    const responde = await request.get('/guessCharacter?character=3852') // Act
    expect(responde.status).toBe(200);
    expect(responde.type).toBe('application/json');
    expect(responde.body.result).not.toBeNull();
    expect(responde.body.result).toBe('X__');
    done();
});

test('get the guessCharacterGenericException endpoint', async done => {
    const responde = await request.get('/guessCharacterGenericException?characterToGuess=1523&character=2550') // Act
    expect(responde.status).toBe(200);
    expect(responde.type).toBe('application/json');
    expect(responde.body.result).not.toBeNull();
    expect(responde.body.result).toBe('No pueden haber caracteres repetidos');
    done();
});

