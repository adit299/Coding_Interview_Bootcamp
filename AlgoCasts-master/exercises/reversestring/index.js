// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let text = "";
     
    for(let i = str.length-1; i >= 0; i--) {
        text += str[i];
    }

    return text;
    
}

module.exports = reverse;

// Approach #1: Use the JavaScript built-in array reverse method
// We turn the word into an array and then reverse, and turn it back into
// a string
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();  
//     return arr.join('');  
// }

// This can be written more concisely as:

// function reverse(str) {
//     return str
//          .split('')   
//          .reverse()
//          .join('');    
// }

// Approach #2: The For Loop

// NOTE: When using JavaScript, as much as possible try not to use traditional for loop syntax,
// I am just introducing more bugs and errors. It is better to use one of the
// simplified for loop syntaxes

// function reverse(str) {
//      let reversed = '';     
//  
//      for (let character of str) {
//          reversed = character + reversed;
//      } 
//      
//      return reversed;  
// }

// Approach 3: The Array helper method

// Starting in ES2016, the reduce method was introduced, which takes two arguments
// An 'accumulator' and a 'currentValue'. Calling it on an array, we can take the current
// value, attach it to an 'accumulator' string, and then that new value is used again for the
// next value and so on

// function reverse(str) { 
//      return str.split('').reduce((reversed, character) => {
//          return character + reversed;
//      }, '');
// }


// Or in a more concise manner:
// function reverse(str) { 
//      return str.split('').reduce((rev, char) => char + rev, '');    
// } 








