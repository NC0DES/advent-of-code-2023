export function calculatePoints(scratchcards: string[]): number {

    let totalPoints = 0

    scratchcards.forEach(card => {
        const [winningNumsStr, playerNumsStr] = card.split(' | ');

        const winningNums = winningNumsStr.split(":")[1].replace("  ", " ").substring(1).split(" ").map(Number)

        const playerNums = new Set(playerNumsStr.replace("  ", " ").split(" ").filter(el => el !== '').map(Number))

        let cardPts = 0;
        let wonNums: number[] = []
        playerNums.forEach(num => {
            if (winningNums.includes(num)) {

                cardPts = (cardPts === 0) ? 1 : cardPts * 2;
                wonNums.push(num)
            }

        })
        console.log({
            winningNums,
            playerNums,
            wonNums,
            cardPts
        })

        totalPoints += cardPts
    })
    return totalPoints
}