// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }
       
    remove() {
        // Empty out the first stack, and put the elements in the second stack in reverse
        // order 
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        // Save a reference to the correct element to return from the second stack, and remove
        // it from the second stack
        const record = this.second.pop();

        // Empty out the second stack, and put the elements back in the original order in first
        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }

        // Return the correct element from the second stack
        return record;
    }

    peek() {
        // Same logic as remove

        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record   
    }
}

module.exports = Queue;
