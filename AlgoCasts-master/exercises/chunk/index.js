// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    for(let element of array) {
        // We let last be the final of element chunked
        const last = chunked[chunked.length - 1]

        // If last does not exist (true for the first iteration, before chunked is populated),
        // or last is equal to our chunk size, we push a new array
        // we push a new array with the next element in the array into chunked.

        // Otherwise, we know we are in the case where last exists as an array, but is not equal
        // to size, so we push the element to last
        if(!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}

module.exports = chunk;

// An alternative approach - The slice approach 
// Using a while loop, we iterate through the entire array, using slice to cut
// out the parts of the array that we want to add to our chunked array. We iterate
// index by the size factor of slice

// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     while(index < array.length) {
//         // Note that the last element of a slice is not included, so 
//         // [1, 2, 3].slice(0, 2) = [1, 2]
//         chunked.push(array.slice(index, index + size));
//         index += size;
//     }

//     return chunked;
// }



