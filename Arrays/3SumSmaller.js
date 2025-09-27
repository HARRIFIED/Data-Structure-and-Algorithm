// return nums[i] + nums[left] + nums[right] < target

/**
 * Input: nums = [-2,0,1,3], target = 2;
 * Output: 2
 * ? Because only  [-2,0,1] and [-2,0,3] gave sum less than 2
 */

function threeSumSmaller(nums, target) {
    nums.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let left = i+1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < target) {
                count += (right - left)
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
}

console.log(threeSumSmaller([-2, 0, 1, 3], 2))