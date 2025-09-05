//Function that finds the factorial of any number
function findFactorialRecursive(n) {
    debugger
    if (n === 0 || n === 1) {
    return 1;
  }
  return n * findFactorialRecursive(n - 1);
}

function findFactorial(number) {
    let answer = 1;
    while (number > 0) {
        answer = answer * number
        number--;
    }
    return answer
}

console.log(findFactorialRecursive(5))
