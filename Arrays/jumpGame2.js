/*
    You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.
    Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:
    0 <= j <= nums[i] and
    i + j < n
    Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.

    Example 1:
    Input: nums = [2,3,1,1,4]
    Output: 2
    Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
    const n = nums.length;

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i <= n - 2; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        // if our current index is equal to the currentEnd it meanse we have exhausted that jumps window so we move currentEnd to farthest
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;

            //break in case our next jumps window is greater or beyond array length
            if (currentEnd >= n - 1) {
                break;
            }
        }
    }

    return jumps;
}

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));