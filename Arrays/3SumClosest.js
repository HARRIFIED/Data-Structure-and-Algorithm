/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  
  let bestDiff = Infinity;
  let closest = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(target - sum);
      
      if (diff === 0) {
        return sum;
      }
      
      if (diff < bestDiff) {
        bestDiff = diff;
        closest = sum;
      }
      
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return closest;
};


console.log(threeSumClosest([-1,2,1,-4], 1))