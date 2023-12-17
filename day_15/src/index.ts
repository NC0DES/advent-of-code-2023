export function hashAlgorithm(input: string): number {
    let currentValue = 0;

    for (let i = 0; i < input.length; i++) {

        const charCode = input.charCodeAt(i);
        currentValue += charCode;
        currentValue *= 17
        currentValue %= 256

    }

    return currentValue;

}

export function sumHashes(initHashes: string): number {

    return initHashes.split(",")
        .map(step => hashAlgorithm(step))
        .reduce((accumulator, value) => accumulator + value, 0)
}