/**
 * 49. Group Anagrams
    
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]

    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

    **Approach
     Create an empty map or object {}
    // for each word we hold that value somewhere, then convert to an array, sort it then convert back to string
    // we check if that key already exsit in the object, if not create one and push the word or push to an existing key
    
        {
            aet: [eat, tea, ate],
            ant: [tan, nat],
            abt: [bat]
        }
        
    //then we loop through the object and push the values of each key to an array.

 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedKeyValues = {};

    for (let word of strs) {
        let sortedWord = word.split("").sort().join('');

        if (sortedKeyValues[sortedKeyValues]) {
            sortedKeyValues[sortedWord].push(word);
        } else {
            sortedKeyValues[sortedWord] = [word];
        }
    }

    return Object.values(sortedKeyValues);
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))