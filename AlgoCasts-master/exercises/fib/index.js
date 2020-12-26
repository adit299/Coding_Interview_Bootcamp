// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     if(n === 1 || n === 2) {
//         return 1;
//     }
//     else {
//         return fib(n-2) + fib(n-1);
//     }
// }

// module.exports = fib;


// Approach #1: Iterative Solution
// 
// function fib(n) {
//      const result = [0, 1];
// 
//      for(let i = 2; i <= n; i++) {
//          const a = result[i - 1]; 
//          const b = result[i - 2];
//          result.push(a + b);
//      } 
// 
//      return result[n];
// }

// Approach #2: Recursive Solution
// An interesting thing to note is that this solution has a very bad runtime, it runs in around
// O(2^n) time.

// Can this runtime be improved?
// Yes, with something known as "memoization". This is the process of storing the arguments
// of each function call along with the result. If the function is called again with the same
// arguments, return the precomputed result, rather than running the function again

function memoize(fn) {
    // Cache is where we will store the results of each of the fib function calls
     const cache = {};
    // This anonymous function acts as a stand in for whichever function we pass into 
    // memoize

    // ...args acts is a bit of ES2015 syntax which signifies that we don't know what
    // arguments will be supplied to the function, we just want those arguments stored in 
    // an array
     return function(...args) {
        //  We check if the function call has already occured.
        // If so, the result has to have been stored in cache, so we simply return it
         if(cache[args]) {
             return cache[args];
         }

        // If the function call has not been encountered we call the function with the
        // arguments supplied, and store it in cache
         const result = fn.apply(this, args);
         cache[args] = result;

        //  After storing in cache, we return the function result
         return result;
     }

}

function fib(n) {
    if(n < 2) {
        return n;
    }
    // We have to ensure that even in our recursive function calls, we are calling
    // the memoized version of our function
    return fib(n-1) + fib(n-2);
}

// We memoize our function call before exporting it
const fib = memoize(fib);

module.exports = fib;
