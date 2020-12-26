// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
    return parseInt(n
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
                   ) * Math.sign(n);       
}

module.exports = reverseInt;

// Trick to this one is knowing the JavaScript built-in libraries
// Originally, I used the absolute values to deal with the sign of the integer,
// However, parseInt, will change a string that looks like 500- to 500 so then we can
// multiply it by Math.sign(n)
