import { readFileSync } from 'fs';
import { sumHashes } from './index'

function readFromFileAndCalc(filePath: string): number {

    try {
        const inputText = readFileSync(filePath, { encoding: 'utf-8' });

        return sumHashes(inputText)

    } catch (error) {
        console.error("Error reading file: ", error);
        throw error;
    }

}

const path = "./data/input.txt";
const finalSum = readFromFileAndCalc(path);
console.log(`Final Sum for initialization sequence in file ${path} equals ${finalSum}`)

