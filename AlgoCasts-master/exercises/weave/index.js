// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alternating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const weave_queue = new Queue();
    
    while(sourceOne.peek() || sourceTwo.peek()) {
        weave_queue.add(sourceOne.remove());
        weave_queue.add(sourceTwo.remove());
    }

    if(sourceOne.peek()) {
        while(sourceOne.peek()) {
            weave_queue.add(sourceOne.remove());
        }
    }
    else {
        while(sourceTwo.peek()) {
            weave_queue.add(sourceOne.remove());
        } 
    }

    return weave_queue;
}

module.exports = weave;

// Solution - A more concise version of what I wrote
// function weave(sourceOne, sourceTwo) {
//   const q = new Queue();
// 
//   while (sourceOne.peek() || sourceTwo.peek()) {
//      if(sourceOne.peek()) {
//          q.add(sourceOne.remove());
//      }       
//      if(sourceTwo.peek()) {
//          q.add(sourceTwo.remove());
//      }
//   
//      return q;
//      
// }