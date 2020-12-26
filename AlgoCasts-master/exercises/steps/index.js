// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let i = 1;
    while(i <= n) {
        let str = "#";
            space = " ";
        str = str.repeat(i);
        str += space.repeat(n - i);
        console.log(str);
        i++;
    }
}

// Recall that in JavaScript, the string multiplier does not work i.e. "" * 3 or something
// like that. Instead use str.repeat.


// TIP 1: In an interview setting, always write out my coding solution in pseudo code first,
// before diving straight into the coding

module.exports = steps;

// Approach #1 - The Iterative Approach
// Note that we can think of the pound sign stairs as looking like a 2D array.

//        c1    c2    c3
//   r1   #     _     _
//   r2   #     #     _
//   r3   #     #     #

// So we can see that whenever the column number <= row number, a pound sign is put in that spot
// Otherwise, it is a blank spot
// function steps(n) {
//     for(let row = 0; row < n; row++) {
//         let stair = '';
//         for(let col = 0; col < n; col++) {
//             if(column <= row) {
//                 stair += '#';
//             }
//             else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// Approach #2 - The Recursive Solution
// Some interesting things that we notice when doing our recursive solution, is the following:
// - if(row === n), we have hit the end of the problem (i.e we are the final row of the
// pound symbol steps)
// - if the 'stair' string has a length === n, we are at the end of the row
// - if the length of the 'stair' string is less than or equal to the row number we're on,
// we add a '#', otherwise we add a space
// function steps(n, row=0, stair='') {
//     // Condition #1: We have completed all our work and we can exit out of our function
//     if(n === row) {
//         return;
//     }
//     // Condition #2: We have hit the end of a row
//     if(n === stair.length) {
//         // We log out our currently completed stair
//         console.log(stair);
//         // We move on to the next row
//         return steps(n, row + 1);
//     }
//     // Condition #3: We have not yet hit the end of a row, and we want to
//     // continue to build our stair variable
//     if(stair.length <= row) {
//         stair += '#';
//     } else {
//         stair += ' ';
//     }
//     // We could shorten the expression above with something like the following
//     // const add = stair.length <= row ? '#' : ' ';
//     // steps(n, row, stair + add);

//     // We keep going with the construction of our stair variable
//     steps(n, row, stair);
// }

