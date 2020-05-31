const express = require('express');
const code = require('./codebreaker');
const cors = require("cors");

const config = {
    application: {
        cors: {
            server: [{
                origin: "http://localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                credentials: true
            }]
        }
    }
};

const app = express();

app.use(cors(
    config.application.cors.server
));



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