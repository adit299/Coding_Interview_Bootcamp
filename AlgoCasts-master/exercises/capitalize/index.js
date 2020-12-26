// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Initializing an empty array, we split our string into an array using the spaces
// then we take each of the characters, make the first letter uppercase, and push it
// into the array. Finally, we join the words, with a space between them
function capitalize(str) {
    const words = [];

    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

module.exports = capitalize;

// Approach 2 - the manual for loop
// function capitalize(str) {
//     // Capitalize the first letter of the string
//     let result = str[0].toUpperCase();

//     // Loop through all characters starting from the second character
//     // of the string
//     for(let i = 1; i < str.length; i++) {
//         // We look to the left of the current character, if it is a space, we know
//         // we are at a new word so we capitalize our current character
//         // Otherwise, we keep going with adding new letters
//         if(str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }
