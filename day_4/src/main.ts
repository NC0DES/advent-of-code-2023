import { readFileSync } from 'fs';
import { calculatePoints } from './index'

function readFromFileAndCalc(filePath: string): number {

    try {
        const document = readFileSync(filePath, { encoding: 'utf-8' });

        const documentData = document.split("\n")

        return calculatePoints(documentData)

    } catch (error) {
        console.error("Error reading file: ", error);
        throw error;
    }

}

const path = "./data/input.txt";
const finalSum = readFromFileAndCalc(path);
console.log(`Final Sum for all points won on scratchcards in file ${path} equals ${finalSum}`)

