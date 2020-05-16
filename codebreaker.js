function guess(a, b, c, d) {
    let response = ''

    if (a == 4)
        response = response + 'X'
    if (b == 5)
        response = response + 'X'
    if (c == 3)
        response = response + 'X'
    if (d == 2)
        response = response + 'X'

    if (a != 4 && (b == 4 || c == 4 || d == 4))
        response = response + '_'
    if (b != 5 && (a == 5 || c == 5 || d == 5))
        response = response + '_'
    if (c != 3 && (a == 3 || b == 3 || d == 3))
        response = response + '_'
    if (d != 2 && (a == 2 || b == 2 || c == 2))
        response = response + '_'
    return response;
}

function guessCharacter(character) {
    let response = ''
    mySplitResult = character.split("");
    let a = mySplitResult[0]
    let b = mySplitResult[1]
    let c = mySplitResult[2]
    let d = mySplitResult[3]

    if (a == 4)
        response = response + 'X'
    if (b == 5)
        response = response + 'X'
    if (c == 3)
        response = response + 'X'
    if (d == 2)
        response = response + 'X'

    if (a != 4 && (b == 4 || c == 4 || d == 4))
        response = response + '_'
    if (b != 5 && (a == 5 || c == 5 || d == 5))
        response = response + '_'
    if (c != 3 && (a == 3 || b == 3 || d == 3))
        response = response + '_'
    if (d != 2 && (a == 2 || b == 2 || c == 2))
        response = response + '_'
    return response;
}

function guessCharacterGeneric(characterToGuess, character) {
    let response = '';
    characterToGuessSplit = characterToGuess.split("");
    let a = characterToGuessSplit[0]
    let b = characterToGuessSplit[1]
    let c = characterToGuessSplit[2]
    let d = characterToGuessSplit[3]

    characterSplit = character.split("");
    let aa = characterSplit[0]
    let bb = characterSplit[1]
    let cc = characterSplit[2]
    let dd = characterSplit[3]

    if (a == aa)
        response = response + 'X'
    if (b == bb)
        response = response + 'X'
    if (c == cc)
        response = response + 'X'
    if (d == dd)
        response = response + 'X'

    if (a != aa && (b == aa || c == aa || d == aa))
        response = response + '_'
    if (b != bb && (a == bb || c == bb || d == bb))
        response = response + '_'
    if (c != cc && (a == cc || b == cc || d == cc))
        response = response + '_'
    if (d != dd && (a == dd || b == dd || c == dd))
        response = response + '_'
    return response;
}

function guessCharacterGenericException(characterToGuess, character) {
    let response = '';
    characterToGuessSplit = characterToGuess.split("");
    characterSplit = character.split("");
    for (const c of characterSplit) {
        if ((character.match(new RegExp(c, "g")) || []).length > 1) {
            return "No pueden haber caracteres repetidos";
        }
    }

    for (let i = 0; i < characterSplit.length; i++) {
        poss = characterToGuessSplit.indexOf(characterSplit[i]);
        if (poss == i) {
            response = 'X'.concat(response);
        } else if (poss != -1) {
            response = response.concat('_');
        }
    }

    return response;
}



module.exports.guess = guess;
module.exports.guessCharacter = guessCharacter;
module.exports.guessCharacterGeneric = guessCharacterGeneric;
module.exports.guessCharacterGenericException = guessCharacterGenericException;