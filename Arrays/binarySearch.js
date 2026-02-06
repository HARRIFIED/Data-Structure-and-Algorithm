//implement binary search

/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @return {number}
 */
var binarySearch = function(nums, target) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

console.log(binarySearch([1,2,3,4,5,6], 4))