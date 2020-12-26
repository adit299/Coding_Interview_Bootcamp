// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while(i < j) {
        if(str[i] === str[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }

    return true;


}

module.exports = palindrome;

// Approach #1 - The "Dumb" Approach
// Recall in reverseString, we created a method which can reverse a string, we can
// use that to compare with our current string
// function palindrome(str) {
//      const reversed = str.split('').reverse().join('');
//      return str === reversed;
// }

// Approach #2 - A more concise Approach to my solution
// The 'every' built-in JavaScript method can be used to test a particular
// boolean expression on every value in an array. The first argument, 'char' represents
// the first character, while the second value, 'i', represents the index of that character
// function palindrome(str) {
//      return str.split('').every((char, i) => {
//          return char === str[str.length - i - 1]; 
//      });
// } 