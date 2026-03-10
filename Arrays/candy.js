/**135. Candy
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

* @param {number[]} ratings
* @return {number}
 */

function candy(ratings) {
    if (!ratings || ratings.length == 0) return 0
    let n = ratings.length;
    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);
    let output = 0;

    //traverse left -> right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }

    //traverse right > left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1
        }
    }

    // sum the max value from both arrays
    for (let i = 0; i < n; i++) {
        output += Math.max(left[i], right[i]);
    }

    return output;
}

console.log(candy([1,0,2]));
console.log(candy([1,2,2]));