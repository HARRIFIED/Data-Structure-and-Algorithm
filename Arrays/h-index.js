/**
 * Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper,
 *  return the researcher's h-index.
   ** According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of 
   ** h such that the given researcher has published at least h papers that have each been cited at least 
   ** h times.
   
    Example 1:

    Input: citations = [3,0,6,1,5]
    Output: 3
    Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
    Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

* @param {number[]} citations
 * @return {number}
 */

//* sorting + scanning approach -> Time complexity O(Nlog n)  Space complexity O(1)
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    const n = citations.length;
    let maxH = 0;

    for (let i = 0; i < n; i++) {
        // Our citations for the current paper index must be at least (>=) be the number of papers 
        // having atleast the number of citations in the current index
        if (citations[i] >= n - i) {
            maxH = Math.max(maxH, n - i);
        }
    }
    return maxH;
}

//* This can also be done using the counting sorting approach too