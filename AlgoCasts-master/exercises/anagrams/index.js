// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
 
function anagrams(stringA, stringB) {
    // Initialize two character maps for each of the strings using our helper
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    // Check if both strings have the same length. otherwise we return false
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    // If any of the characters differ, we return false
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }

    // Otherwise, we return true
    return true;

}

function buildCharMap(str) {
    const charMap = {};

    // Example of a regex statement, which takes all non-alphabetic
    // terms and replaces them with blanks
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        char in charMap ? charMap[char]++ : charMap[char] = 1
    }

    return charMap;
}

module.exports = anagrams;

// Alternate solution: Using sort
// Note that when we call sort on an array of alphabetical terms, 
// it orders all the characters of the array in alphabetical order

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
    // We remove all non-alphabetical characters from the string, make it lowercase
    // then split it into an array, sort it in alphabetical order, and join the resulting
    // word back together. Thus, as a result we end up with the same two strings
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

// Meaning of each of the Regex elements:
// / - the first slash signifies that we are starting a regular expression 
// [^] - the two square brackets signifies a character set, anything within those
//       square brackets are matched in the string. The negation symbol, ^, signifies
//       the negation of what is in the square brackets is matched
// \w - matches any alphabetic character
// /g - global match, meaning it won't stop after idenifying the first match, it will keep
//      going till the end of the string