// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     // Represents the index position for the midpoint in each pyramid
//     const midpoint = Math.floor((2 * n - 1) / 2);
    
//     for(let row = 0; row < n; row++) {
//         let level = ''
//         for(let col = 0; col < (2*n)-1; col++) {
//             if(midpoint - row <= col && col <= midpoint + row) {
//                 level += "#";
//             }
//             else {
//                 level += " ";
//             }
//         }
//         console.log(level);
//     }
// }

// module.exports = pyramid;

// Approach #2 - the recursive approach

function pyramid(n, row=0, level='') {
    const midpoint = Math.floor((2 * n - 1) / 2); 

    // When we finished constructing the pyramid
    if(n === row){
        return;
    }

    // When we have finished constructing the row
    if(level.length === (2*n) - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    // When we are still constructing the row
    if(level.length <= (2*n) - 1) {
        if(midpoint - row <= level.length && level.length <= midpoint + row) {
            level += "#";
        }
        else {
            level += " ";
        }
    }
    pyramid(n, row, level);

}

module.exports = pyramid;