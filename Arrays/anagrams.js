/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//Time complexity => O(n * 26) => O(n)
//Space complexity = O(26) => 0(1)
var findAnagrams = function(s, p) {
    let result = [];
    const sLen = s.length;
    const pLen = p.length;
    if (pLen > sLen) return result;

    // We create a frequency map of p
    const pMap = new Map();
    for (let i = 0; i < pLen; i++) {
        pMap.set(p[i], (pMap.get(p[i]) || 0) + 1)
    }

    // Build the first window with the lenght of p (pLen)
    const sMap = new Map();
    for (let i = 0; i < pLen; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
    }

    // Compare sMap and pMap
    if (isEqual(sMap, pMap)) result.push(0);

    //Slide the window from pLen
    for (let i = pLen; i < sLen; i++) {
        let leftChar = s[i - pLen];
        if (sMap.get(leftChar) == 1) {
            sMap.delete(leftChar)
        } else {
            sMap.set(leftChar, sMap.get(leftChar) - 1)
        }

        let rightChar = s[i]
        sMap.set(rightChar, (sMap.get(rightChar) || 0) + 1)
        //Compare again
        if (isEqual(sMap, pMap)) result.push(i - pLen + 1);
    }
    return result;
};

function isEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }
    return true;
}

console.log(findAnagrams("abab", "ab"))
