function extractDigits(line: string): [string, string]{

    const digitsArr = line.match(/\d/g) || [];

    if (digitsArr[0] && digitsArr.length >= 2){

        return [digitsArr[0], digitsArr[digitsArr.length -1]]

    }
    else if(digitsArr[0] && digitsArr.length >= 1){

        return [digitsArr[0], digitsArr[0]]
        

    }  else {
        return ['0', '0'];

    }

    
}

export function calculateCalibrationSum(document: string) : number {

    let sum = 0;

    let numsToSum = [0]


    document.split("\n").forEach(line => {

        const [first, last ] = extractDigits(line);

        const twoDigitNum = parseInt(`${first}${last}`);
        
        numsToSum.push(twoDigitNum);

        sum += twoDigitNum

    })
   
    console.log(numsToSum);

    return sum;


}