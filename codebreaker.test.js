const code = require('./codebreaker');

describe('guess operation', () => {
    test('guess 3852 to equal X__', () => {
        expect(code.guess(3, 8, 5, 2)).toBe('X__');
    });

    test('guess 4321 to equal X__', () => {
        expect(code.guess(4, 3, 2, 1)).toBe('X__');
    });

    test('guess 9176 to equal ', () => {
        expect(code.guess(9, 1, 7, 6)).toBe('');
    });

    test('guess 4576 to equal XX', () => {
        expect(code.guess(4, 5, 7, 6)).toBe('XX');
    });
});

describe('guessCharacter operation', () => {
    test('guessCharacter 3852 to equal X__', () => {
        expect(code.guessCharacter('3852')).toBe('X__');
    });

    test('guessCharacter 4321 to equal X__', () => {
        expect(code.guessCharacter('4321')).toBe('X__');
    });

    test('guessCharacter 9176 to equal ', () => {
        expect(code.guessCharacter('9176')).toBe('');
    });

    test('guessCharacter 4576 to equal XX', () => {
        expect(code.guessCharacter('4576')).toBe('XX');
    });
});

describe('guessCharacterGeneric operation', () => {
    test('guessCharacterGeneric 3852 to equal X__', () => {
        expect(code.guessCharacterGeneric('4532', '3852')).toBe('X__');
    });

    test('guessCharacterGeneric 4321 to equal X__', () => {
        expect(code.guessCharacterGeneric('4532', '4321')).toBe('X__');
    });

    test('guessCharacterGeneric 9176 to equal ', () => {
        expect(code.guessCharacterGeneric('4532', '9176')).toBe('');
    });

    test('guessCharacterGeneric 4576 to equal XX', () => {
        expect(code.guessCharacterGeneric('4532', '4576')).toBe('XX');
    });

    test('guessCharacterGeneric 1523 to equal X__', () => {
        expect(code.guessCharacterGeneric('1523', '0532')).toBe('X__');
    });
});

describe('guessCharacterGenericException operation', () => {
    test('guessCharacterGenericException 5876 to equal "No pueden haber caracteres repetidos"', () => {
        expect(code.guessCharacterGenericException('4896', '5866')).toBe('No pueden haber caracteres repetidos');
    });

    test('guessCharacterGenericException 1523 to equal X__', () => {
        expect(code.guessCharacterGenericException('1523', '0532')).toBe('X__');
    });

    test('guessCharacterGenericException 9176 to equal ', () => {
        expect(code.guessCharacterGenericException('4532', '9176')).toBe('');
    });
});