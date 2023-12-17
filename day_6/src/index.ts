type MapType = Record<number, number>;

function createMap(mapData: Array<[number, number, number]>): MapType {
    const map: MapType = {};
    mapData.forEach(([destStart, sourceStart, rangeLength]) => {
        for (let i = 0; i < rangeLength; i++) {
            map[sourceStart + i] = destStart + i;
        }
    });
    return map;
}

function convertNumber(sourceNumber: number, map: MapType): number {
    return map.hasOwnProperty(sourceNumber) ? map[sourceNumber] : sourceNumber;
}

function findLowestLocation(seeds: number[], maps: Array<Array<[number, number, number]>>): number {
    const [seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation] = maps.map(createMap);

    const locations = seeds.map(seed => {
        let number = seed;
        number = convertNumber(number, seedToSoil);
        number = convertNumber(number, soilToFertilizer);
        number = convertNumber(number, fertilizerToWater);
        number = convertNumber(number, waterToLight);
        number = convertNumber(number, lightToTemperature);
        number = convertNumber(number, temperatureToHumidity);
        return convertNumber(number, humidityToLocation);
    });

    return Math.min(...locations);
}

export { findLowestLocation };
