import { isGamePossible, sumPossibleGameIds } from './game'

describe('Cube Game Test', () => {

    const gamesData = [
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
        'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
        'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
    ]

    test.each([
        [gamesData[0], true],
        [gamesData[1], true],
        [gamesData[2], false],
        [gamesData[3], false],
        [gamesData[4], true]
    ])('should correctly check if game is possible (%s)', (game, expected) => {

        expect(isGamePossible(game, 12, 13, 14)).toBe(expected);

    })

    test('should calc correct sum of truley possible games IDs', () => {
        expect(sumPossibleGameIds(gamesData, 12, 13, 14)).toBe(8);
    })
})
