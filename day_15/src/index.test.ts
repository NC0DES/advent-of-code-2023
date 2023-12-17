import { hashAlgorithm, sumHashes } from './index';

describe("HASH Algorithm", () => {

    test("Running HASH Algo on 'HASH' ", () => {
        expect(hashAlgorithm('HASH')).toBe(52)
    });

    test("Running HASH Algo on 'q' ", () => {
        expect(hashAlgorithm('q')).toBe(129)
    });

    test("Running HASH Algo on empty string ", () => {
        expect(hashAlgorithm('')).toBe(0)
    });

    test("Sum of hashes for given example", () => {

        const example = 'rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7'
        expect(sumHashes(example)).toBe(1320)
    })

    test("Sum of hashes for short example", () => {

        const example = 'HASH,q'
        expect(sumHashes(example)).toBe(52 + 129)
    })

    test("Sum of hashes for empty string", () => {

        const example = ''
        expect(sumHashes(example)).toBe(0)
    })

})