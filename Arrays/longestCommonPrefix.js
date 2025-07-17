/**
 * @param {string[]} strs
 * @return {string}
 */

//Horizontal scanning
function longestCommonPrefix(strs) {
    if (strs.length < 1) return "";
    let first = strs[0];
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i > strs[j].length || strs[j][i] !== first[i]) {
                return first.substring(0, i)
            }
        }
    }
    return first
} 

const strings = ["floatation", "flow", "floating"]

console.log(longestCommonPrefix(strings))