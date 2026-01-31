/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //* Brute force
    /**
     * We have 2 loops inner loop stores the last element in a var and then shifts all the elements to the right
     * the outer loop does the inner loop k times
     */

    let n = nums.length;
    if (n === 0) return;
    k = k % n;
    if (k === 0) return;

    // for (let r = 0; r < k; r++) {
    //     const lastElement = nums[n - 1];
    //     for (let i = n - 1; i > 0; i-- ) {
    //         nums[i] = nums[i - 1];
    //     }
    //     nums[0] = lastElement;
    // }

    // return nums;

    //* Reversal
    /**
     * We reverse the full array
     * then reverse the first k values
     * then reverse the n-k values (Values after the first k values)
     */

    //* 1 reverse full array
    let i = 0;
    let j = n - 1;
    reverse(i, j, nums);

    //* 2. reverse first k values
    let ik = 0;
    let jk = k - 1;
    reverse(ik, jk, nums);

    //* 3. reverse first n-k values
    let ni = k;
    let nj = n - 1;
    reverse(ni, nj, nums);

    return nums;
    
};

function reverse(i, j, nums) {
    while (i < j) {
        let temp  = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        i++;
        j--;
    }
}

console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([-1,-100,3,99], 2))