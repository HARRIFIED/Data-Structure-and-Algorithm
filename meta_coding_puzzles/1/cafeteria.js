// Problem: Cafeteria
// A cafeteria table consists of a row of N seats, numbered from 1 to N from
// left to right. Social distancing guidelines require that every diner be
// seated such that K seats to their left and K seats to their right (or all the
// remaining seats to that side if there are fewer than K) remain empty.

// There are currently M diners seated at the table, the ith of whom is in seat
// S{i}. No two diners are sitting in the same seat, and the social distancing
// guidelines are satisfied.

// Determine the maximum number of additional diners who can potentially sit at
// the table without social distancing guidelines being violated for any new or
// existing diners, assuming that the existing diners cannot move and that the
// additional diners will cooperate to maximize how many of them can sit down.

// Constraints:
// 1 <= N <= 10^(15)
// 1 <= K <= N
// 1 <= M <= 500,000
// M <= N
// 1 <= S{i} <= N

// Solution
// Time Complexity: O(M * log(M))
// Space Complexity: O(M); O(1) if sorting is done in-place.
// Explanation: The number of additional diners between two seats can easily be
// calculated in O(1) time, but requires us to iterate through diners from left
// to right. So, sort the existing diners in O(M * log(M)) time and then sum up
// the number of additional diners that can be placed between each existing
// diner.

/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
  let additionalDiners = 0;
  const socialDistance = K + 1;

  const currentDiners = [...S].sort((a, b) => a - b);
  console.log("c", currentDiners)

  // Calculate additional diners before the first diner
  additionalDiners += Math.floor((currentDiners[0] - 1) / socialDistance);
 
  // Calculate additional diners after the last diner
  additionalDiners += Math.floor((N - currentDiners[currentDiners.length - 1]) / socialDistance);

  // Calculate additional diners between each consecutive diner
  for (let i = 0; i < M - 1; i++) {
    const diner1 = currentDiners[i];
    const diner2 = currentDiners[i + 1];
    additionalDiners += Math.floor((diner2 - diner1 - socialDistance) / socialDistance);
  }

  return additionalDiners;
}


console.log(getMaxAdditionalDinersCount(10, 1, 2, [2, 6]));
console.log(getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]));