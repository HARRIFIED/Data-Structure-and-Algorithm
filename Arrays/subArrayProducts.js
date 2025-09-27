/**
 * 713. Subarray Product Less Than K.

 *  Given an array of positive integers nums and an integer k, return the number of subarrays 
    where the product of all the elements in the subarray is strictly less than k.

 *   For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. 
    The subarrays with products less than k are:

     0   1  2  3
    [10, 5, 2, 6]
         L
               R
     [10], [10, 5], [5], [5,2], [2], [2,6], [5,2,6], [6]
    
  * answer = 8
 */

function numberOfSubArrays(nums, k) {
    if (k <= 1) {
        return 0;
    }

    let left = 0;
    let product = 1;
    let answer = 0;
   
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k) {
            product /= nums[left];
            left++;
        }

        answer = answer + right - left + 1;
    }

    return answer;

}

console.log(numberOfSubArrays([10, 5, 2, 6], 100))