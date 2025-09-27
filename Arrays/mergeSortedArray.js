//Given two sorted arrays. Merge the two sorted array

function mergeSortedArray (arr1, arr2) {
    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    const mergedArray = [];
    let arr1Pointer = arr1[0];
    let arr2Pointer = arr2[0];

    let i = 1;
    let j = 1;

    while (arr1Pointer || arr2Pointer) {
        if (arr2Pointer === undefined || arr1Pointer < arr2Pointer) {
            mergedArray.push(arr1Pointer);
            arr1Pointer = arr1[i];
            i++;
        } else {
            mergedArray.push(arr2Pointer);
            arr2Pointer = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

const result = mergeSortedArray([0,3,4,31,59,1000], [3,4,6,30,50,60]);
console.log(result);

/**
 * 
 * Arr1= [1,4,7,20]
 * Arr2=[3,5,6]
 * Output = [1,3,4,5,6,7,20]
 */

function mergeSortedArray2(arr1, arr2) {
    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }
    let output = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        output.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        output.push(arr2[j]);
        j++;
    }

    return output;
}

console.log(mergeSortedArray2([1,4,7,20], [3,5,6]))