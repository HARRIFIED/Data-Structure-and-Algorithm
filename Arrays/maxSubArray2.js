/**
 * Given an integer array nums, find the subarray with the largest sum, and return the actual sub array.
    
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: [4,-1,2,1]
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
     0  1   2  3  4
    [5, 4, -1, 7, 8]
                  i
     S
     BS
                 BE

    i = current index of the array in the iteration    
    S= start
    BS = Best Start
    BE = Best End
    currentSum = 23
    maxSum = 23
    Output = [5, 4, -1, 7, 8] => {If returning indices then no need to use nums.slice(BS, BE + 1)}

    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
                                 i
                S
                BS
                          BE

    currentSum = 5
    maxsum = 6
    output = [4,-1,2,1]
   
      0   1   2   3   
    [-2, -3, -1, -5]
    i
    S
    BS
    BE

    -3+(-2+3) = -3 + 1 = -2
    -1+()
    currentSum = -3
    maxSum = -2

    ** We are using Kadane's algorithm to solve this problem in O(n) time complexity and O(1) space complexity.

    We keep track of the currentSum and maxSum as we iterate through the array.
    We reset currentSum to 0 if it goes below 0 because any negative sum will not contribute 
    positively to the sum of a future subarray.

*/

// original
function maxSubArray(nums) {
    let currentSum = 0;
    let maxSum = -Infinity;
    let start = 0;
    let bestStart = 0;
    let bestEnd = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        //reset if currentSm is less or equal to zero
        if (currentSum <= 0) {
            currentSum = 0;
            start = i + 1;
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            bestStart = start;
            bestEnd = i;
        }
    }

    return nums.slice(bestStart, bestEnd + 1);
}

// Where we might be expecting all negative numbers
function maxSubArray2 (nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    let start = 0;
    let bestStart = 0;
    let bestEnd = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            start = i;
        }
    }
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]))