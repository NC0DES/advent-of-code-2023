import { readFileSync } from 'fs';
import {calculateCalibrationSum } from './calibration'

function readFromFileAndCalc (filePath: string): number {

    try {
        const documentData = readFileSync(filePath, {encoding: 'utf-8'})

        return calculateCalibrationSum(documentData)

    } catch (error){
        console.error("Error reading file: ", error);
        throw error;
    }

}

const path = "data/input.txt";
const finalSum = readFromFileAndCalc(path);
console.log(`Final Sum for calibration doc ${path} equals ${finalSum}`)

