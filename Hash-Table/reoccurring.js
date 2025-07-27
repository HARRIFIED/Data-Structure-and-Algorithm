/**
 * ?Get thr first reoccurring element in an array
 * 
 * Given an array = [2,5,1,2,3,5,1,2,4]
 * It should return 2
 * 
 * Given an array = [2,1,1,2,3,5,1,2,4]
 * It should return 1
 * 
 * Given an array = [2,3,4,5]
 * It should return undefined
 */

/**
 * @param array[]
 * @returns first reoccuring element
 */

function getReoccurringElement(array) {
    if (!array.length) return undefined
    const arrayMap = new Map();

    for (let i = 0; i < array.length; i++) {
        if (arrayMap.has(array[i])) {
            return array[i]
        }
        arrayMap.set(array[i], i)
    }
    return undefined
}
//brute solution with nested loop
function getReoccurringElement2 (array) {
    if (!array.length) return undefined;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] ) {
                return array[i]
            }
        }
    }
    return undefined
}
// {2:0, 1:1, }
console.log(getReoccurringElement2([2,5,1,2,3,5,1,2,4]));