import { readFileSync } from 'fs';
import { sumPossibleGameIds } from './game'

function readFromFileAndCalc(filePath: string): number {

    try {
        const document = readFileSync(filePath, { encoding: 'utf-8' });

        const documentData = document.split("\n")

        return sumPossibleGameIds(documentData, 12, 13, 14)

    } catch (error) {
        console.error("Error reading file: ", error);
        throw error;
    }

}

const path = "./data/input.txt";
const finalSum = readFromFileAndCalc(path);
console.log(`Final Sum for possible games' ids in ${path} equals ${finalSum}`)

