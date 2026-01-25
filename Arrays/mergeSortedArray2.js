/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
    return nums 1 here for testing.
    * @param {number[]} nums1
    * @param {number} m
    * @param {number[]} nums2
    * @param {number} n
 */

function merge(nums1, m, nums2, n){
    i = m - 1; // last real index of nums1
    j = n - 1; // last index of nums2                                               i         k
    k = m + n - 1  // last index of nums 1 after adding length of nums 1 & 2; nums1 = [1, 2, 3, 0, 0, 0]

    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            j--;
        } else {
            nums1[k] = nums1[i];
            i--;
        }

        k--;
    }

    // copy values in nums2 after we have exhausted real values in nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}

/**
 * nums1 = [1,2,3,4,5,6]
 *        i k
 * 
 * nums2= [1,2,3]
 *         j
 */
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3))