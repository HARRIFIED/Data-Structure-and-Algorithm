/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Max average sub array II
var findMaxAverage = function(nums, k) {
    let curr_sum = 0;

    //build window with fixed length k
    for (let i = 0; i < k; i++) {
        curr_sum += nums[i];
    }
    max_avg = curr_sum / k;

    for (i = k; i < nums.length; i++) {
        curr_sum = curr_sum + nums[i];
        curr_sum = curr_sum - nums[i - k];
        
        avg = curr_sum / k;
        max_avg = Math.max(max_avg, avg)
    }
    return max_avg
};

console.log(findMaxAverage([5], 1))