export function isGamePossible(rawGameText: string, maxRed: number, maxGreen: number, maxBlue: number): boolean {
    const sets = rawGameText.split(': ')[1].split('; ');

    for (let set of sets) {

        const { red, green, blue } = countCubes(set);

        console.log({ sets }, countCubes(set))
        if ((red > maxRed) || (green > maxGreen) || (blue > maxBlue)) {
            console.log(" === GAME IMPOSSIBLE ===")
            return false
        }
    }
    console.log(" === GAME POSSIBLE ===")
    return true
}

function countCubes(set: string): CubeSet {
    const colorCounts = { red: 0, green: 0, blue: 0 };

    const parts = set.match(/\d+ (red|green|blue)/g) ?? [];

    for (let part of parts) {
        const [count, color] = part.split(' ');
        colorCounts[color as keyof typeof colorCounts] += parseInt(count)
    }
    return colorCounts
}

type CubeSet = {
    red: number,
    green: number,
    blue: number
}


export function sumPossibleGameIds(gamesData: string[], maxRed: number, maxGreen: number, maxBlue: number): number {

    let sum = 0;
    for (let gameData of gamesData) {
        const gameId = parseInt(gameData.split(': ')[0].replace('Game ', ''));

        console.log({ gameId }, { gameData })

        if (isGamePossible(gameData, maxRed, maxBlue, maxGreen)) {
            sum += gameId
        }
    }

    return sum
}