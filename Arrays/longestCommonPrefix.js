/**
 * @param {string[]} strs
 * @return {string}
 */

//Horizontal scanning
function longestCommonPrefix(strs) {
    if (strs.length == 0) return "";
    const firstString = strs[0]
    let prefix = ""

    for (let i = 0; i < firstString.length; i++) {
        const char = firstString[i];
        for (let j = 1; j < strs.length; j++) {
            if (i > strs[j].length || strs[j][i] !== char) {
                return prefix
            }
        }
        prefix += char
    }

    return prefix
}

const strings = ["floatation", "flow", "floating"]

console.log(longestCommonPrefix(strings))