import {calculateCalibrationSum } from './calibration';

test('handle empty document', () => {

    let exampleDoc = ''

    expect(calculateCalibrationSum(exampleDoc)).toBe(0)

});

test('document with no digits', () => {

    let exampleDoc = `abcXYZ
    cdeQWR
    `

    expect(calculateCalibrationSum(exampleDoc)).toBe(0)

});


test('calculate the sum of a list of calibration values correctly', () => {

    let exampleDoc = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

    expect(calculateCalibrationSum(exampleDoc)).toBe(142)

});


