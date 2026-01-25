/**
 * Given an interger array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * Follow up: Could you minimize the total number of operations done?
 */

function moveZeros(nums) {
    let write = 0;
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== 0) {
            nums[write] = nums[read];
            write++;
        }
    }

    // changing the values after write to zero (Additional cleanup)
    for (let i = write; i < nums.length; i++ ) {
        nums[i] = 0;
    }
    return nums;
}

//swappping method
function moveZeros2(nums) {
    let write = 0;
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== 0) {
            [nums[read], nums[write]] = [nums[write], nums[read]];
            write++;
        }
    }

    return nums;
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros2([0,1,0,3,12]))