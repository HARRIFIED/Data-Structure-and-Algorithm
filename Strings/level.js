// Code solve from basic to advance strings problems

class StringClass {
    constructor() {

    }
    
    //Time complexity => O(n)
    //Space complexity => O(n)
    reverseString(str) {
        let stringArray = [];
        let reverseString = "";

        for (let i = str.length;  i--;) {
            stringArray.push(str[i])
        }

        // for (let i = 0; i < stringArray.length; i++) {
        //     reverseString += stringArray[i]
        // }
        return stringArray.join("")
    }

    //Time complexity => O(n)
    //Space complexity => O(1) or still O(n)
    reverseStringWithTwoPointer(str) {
        let arr = str.split("");

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--
        }

        return arr.join("")
    }

    // Checks if a string reads backward
    checkPalindrome(str) {
        const reverseString = str.split("").reverse().join("")
        return str === reverseString
    }

    countVowels(str) {
        const vowels = ["a", "e", "i", "o", "u"];
        let vowelsInstr = 0;

        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                vowelsInstr += 1
            }
        }

        return vowelsInstr;
    }

    countVowels2(str) {
        const vowels = new Set(["a", "e", "i", "o", "u"]);
        let count = 0;

        for (let char of str.toLowerCase()) {
            if (vowels.has(char)) count++
        }
        return count;
    }

    // Check if str1 and str2 contain same characters even if rearranged
    checkAnagram(str1, str2) {
        if (str1.length !== str2.length) return false
        str1 = str1.split("").sort().join("");
        str2 = str2.split("").sort().join("")
        return str1 === str2
    }

    checkAnagram2(str1, str2) {
        const charCount = {};
        
        for (let char of str1) {
            charCount[char] = (charCount[char] || 0) + 1
        }
        for (let char of str2) {
            charCount[char] = (charCount[char] || 0) - 1 
        }

        for (let key in charCount) {
            if (charCount[key] !== 0) {
                return false
            }
        }

        return true
    }
}

const strClass = new StringClass()

// console.log(strClass.reverseString("hello"))
// console.log(strClass.reverseStringWithMemoryEffciency("hello"))
// console.log(strClass.checkPalindrome("madams"))
// console.log(strClass.countVowels2("aeiou"))
console.log(strClass.checkAnagram2("listen", "silent"))