// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // The i regex term after the g stands for "insensitive", it signifies that the
    // matches are case insensitive

    // We need to deal with the case where no vowels are found, (which results in 
    // null being returned, hence the ternary operation)
    
    return (str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0);
}

module.exports = vowels;

// Approach #1 - Iterative approach. We are using the includes builtin method
// which can check if a particular character matches with one of the characters in a string

// function vowels(str) {
//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u']

//     for(let char of str.toLowerCase()) {
//         if(checker.includes(char)){
//             count++;
//         }
//     }

//     return count;

// }