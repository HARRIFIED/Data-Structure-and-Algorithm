/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
    
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.

    [5, 4, -1, 7, 8]
    L
                R
    currentSum = 23
    maxSum = 23

    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        L
                                R
    maxSum = Math.max(maxSum, currentSum);
    ** We are using Kadane's algorithm to solve this problem in O(n) time complexity and O(1) space complexity.

    We keep track of the currentSum and maxSum as we iterate through the array.
    We reset currentSum to 0 if it goes below 0 because any negative sum will not contribute 
    positively to the sum of a future subarray.

*/

function maxSubArray(nums) {
    let currentSum = 0;
    let maxSum = -Infinity;

    for (let num of nums) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);

        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([5,4,-1,7,8]))