const express = require('express');
const app = express();
const code = require('./codebreaker');

app.get('/guessCharacterGenericException', (req, res) => {
    res.json({
        result: code.guessCharacterGenericException(req.query.characterToGuess, req.query.character)
    });
});

app.get('/guessCharacter', (req, res) => {
    res.json({
        result: code.guessCharacter(req.query.character)
    });
});


module.exports = app;
