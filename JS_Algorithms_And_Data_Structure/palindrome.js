// ignore upper, lower case, and remove non-alphabet and non-number
function palindrome(str) {
    /* 
    @params: 
        str: input string
    @return:
        isPalindrome (true or false)
    */
   let strings = str.match(/[A-Za-z0-9]/g)
   return strings.join('').toUpperCase() === strings.reverse().join('').toUpperCase()
}

console.log(palindrome('not a palindrome')) // false
console.log(palindrome('race car')); // true
console.log(palindrome('2A3*3a2')) // true