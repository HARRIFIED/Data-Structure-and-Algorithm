//Implementing Linear search ...> Finding target element in an array
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Element found found at index ${i}`
        }
    }
    return `Target element not found in array`
};

const arr = [2, 5, 9, 20, 10, 14, 22, 24, 34];

const result = search(arr, 10)
console.log(result)

/**
 * Time complexity is o(4) for the element 10
 * Space complexity is o(1)
 * * For linear search for dynamic change of target elements 
 * Time complexity: o(N)
 * Soace complexity o(1)
 */

