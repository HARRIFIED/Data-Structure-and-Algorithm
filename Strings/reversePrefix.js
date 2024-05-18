var reversePrefix = function (word, ch) {
    const arr = word.toLowerCase().split("")
    const charIndex = arr.findIndex(res => res === ch.toLowerCase())
    if (charIndex !== -1) {
        const pFirst = arr.slice(0, charIndex + 1).reverse()
        const pSecond = arr.slice(charIndex + 1)
        return [...pFirst, ...pSecond].join("")

    } else {
        return word
    }
};

//Test
console.log(reversePrefix("abcdefd", "d"))