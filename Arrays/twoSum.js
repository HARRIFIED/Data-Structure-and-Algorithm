/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//O(n^2) => Time complexity
//O(1) => Space complexity
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [nums[i], nums[j]]
            }
        }
    }
};

//testing
// console.log(twoSum([1, 2, 3, 4, 5], 5))

// O(n) => time complexity
// O(n) => space complexity
//returns values of the two numbers that add up to the target
function twoSum2(nums, target) {
    /**
     *  map = {6, 5, 4} => true
     * loop through the arrray
     */

    let complementSet = new Set();
    let lens = nums.length

    for (let i = 0; i < lens; i++) {
        if (complementSet.has(nums[i])) {
            return [target - nums[i], nums[i]]
        }
        complementSet.add(target - nums[i])   
    }

    return []
}

// O(n) => time complexity
// O(n) => space complexity
//returns indices
function twoSum3(nums, target) {
    //Create num => index map to store number as key and index as value
    let numsIndexMap = new Map();

    //loop through the array and calculate the complements for each element if the complement exist in the map
    //Then we return the index of the complement and number at the time of the loop
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (numsIndexMap.has(complement)) {
            return [numsIndexMap.get(complement), i]
        }
        numsIndexMap.set(nums[i], i)
    }
    return []
}


console.log(twoSum3([10, 2, 4, 5, 9], 6))

