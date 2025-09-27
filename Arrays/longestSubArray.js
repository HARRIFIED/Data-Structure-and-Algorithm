//longest subarray with sum less than or equal to k.
// nums = [3, 2, 1, 3, 1, 1] and k = 5

function longestSubArray(nums, k) {
  let left = 0;
  let curr = 0;
  let longestLength = 0;
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];
    while (curr > k) {
	curr -= nums[left];
	left++
    }
    let windowLength = right - left + 1;
    longestLength = Math.max(longestLength, windowLength);
  }
  return longestLength;
}

console.log(longestSubArray([3, 2, 1, 3, 1, 1], 5))
