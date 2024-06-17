/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * 
 * Returns string in alternate pattern
 */
var mergeAlternately = function (word1, word2) {
    let word1Arr = word1.split("")
    let word2Arr = word2.split("")
    let newArr = []

    let maxLength = Math.max(word1Arr.length, word2Arr.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < word1Arr.length) {
            newArr.push(word1Arr[i])
        }
        if (i < word2Arr.length) {
            newArr.push(word2Arr[i])
        }
    }

    return newArr.join("")
};


console.log(mergeAlternately("abcde", "pqrst"))