/**
 * @param {string} s
 * @return {number}
 */
//Sliding window solution
var lengthOfLongestSubstring = function(s) {
  const stringMap = new Set();
  let left = 0;
  let longest = 0;
  n = s.length;
  for (let right = 0; right < n; right++) {
    console.log("s", stringMap)
    console.log("l", longest)
    while (stringMap.has(s[right])) {
      stringMap.delete(s[left]);
      left += 1;
    }

    stringMap.add(s[right]);
    let windowLength = (right - left) + 1;
    longest = Math.max(longest, windowLength);
  }
  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"))

/**
 * Example
 * Input = "abcabcbb"
 * Output = 3
 * 
 * s = "bbbbb"
 * output = 1
 * 
 * s = "pwwkew"
 * output = 3
 */