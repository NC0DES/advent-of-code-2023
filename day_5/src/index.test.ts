import { sumPartNums } from './index'

describe('Decipher engine Schematic Tests', () => {

    const testSchematic = [
        `467..114..`,
        `...*......`,
        `..35..633.`,
        `......#...`,
        `617*......`,
        `.....+.58.`,
        `..592.....`,
        `......755.`,
        `...$.*....`,
        `.664.598..`
    ];

    test('test exmaple schematic', () => {
        expect(sumPartNums(testSchematic)).toBe(4361)
    })


})
