import { readFileSync } from 'fs';
import { sumPossibleGameIds } from './index'

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
console.log(`Final Sum for all part numbers in engine schematic in file ${path} equals ${finalSum}`)

