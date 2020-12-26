// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



// Important thing to note is that in JavaScript, when we assign a value to an array
// which does not have the rest of the values intialized, it ends up as null for the rest 
// rest of them
// const arr = []
// arr[3] = 2;
// arr
// [null, null, null, 2];


function matrix(n) {
    const results = [];

    for(let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
        startColumn = 0;
        endColumn = n - 1;
        startRow = 0;
        endRow = n - 1;

    while(startColumn <= endColumn && startRow <= endRow) {
        // Assembling the top row
        for(let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        // After the top row is assembled, we move to the next row
        startRow++;

        // Assembling the rightmost column
        for(let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        // Assembling the bottom row 
        for(let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }

        endRow--;

        // Assembling the start column
        for(let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }
    
    return results;

}



// Given a integer n, creates an empty n x n array
// function createArray(n) {
//     let arr = [];

//     for(let i = 0; i < n; i++){
//         arr.push([]);
//         for(let j = 0; j < n; j++) {
//             arr[i].push(0);
//         }
//     }

//     return arr;


// }



module.exports = matrix;
