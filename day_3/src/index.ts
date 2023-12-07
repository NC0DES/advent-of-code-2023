export function sumPartNums(schematic: string[]): number {
    let sum = 0;

    let allSymbols = "";

    const symbolSet = new Set(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '?', '/']);

    for (let i = 0; i < schematic.length; i++) {
        const schematicRow = schematic[i].split('');

        for (let j = 0; j < schematicRow.length; j++) {

            if (symbolSet.has(schematicRow[j])) {
                allSymbols += schematicRow[j];

                const thisSymbol = schematicRow[j]
                console.log({ thisSymbol })
                sum += sumAdjacentNums(schematic, i, j);
            }
        }
    }

    console.log({ allSymbols })
    return sum
}

function sumAdjacentNums(schematic: string[], xIndex: number, yIndex: number): number {
    let sum = 0

    console.log(" +++ coords: ", { xIndex }, { yIndex })

    for (let i = -1; i <= 1; i++) {

        for (let j = -1; j <= 0; j++) {

            if ((i === 0) && (j === 0)) {
                continue;
            }

            const nx = xIndex + i;
            const ny = yIndex + j;

            if (nx >= 0 && nx < schematic.length && ny >= 0 && ny < schematic[xIndex].length) {
                const char = schematic[nx].split('')[ny];

                if (!isNaN(parseInt(char))) {

                    //console.log({ char, nx, ny });
                    crawlNumLen(schematic, nx, ny)
                    sum += parseInt(char)
                }
            }
        }
    }

    return sum;

}

function crawlNumLen(schematic: string[], xIndx: number, yIndx: number): number {

    let numText = "";

    for (let index = 3; index > -3; index--) {

        const char = schematic[xIndx].split('')[yIndx - index];

        if (!isNaN(parseInt(char))) {

            numText += char
        }

    }

    const parsedNumText = parseInt(numText)

    console.log({ parsedNumText });

    return parsedNumText

}