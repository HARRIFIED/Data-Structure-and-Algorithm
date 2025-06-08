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