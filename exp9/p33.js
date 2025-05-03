var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    // Enqueue: Add a value to the rear of the queue
    Queue.prototype.enqueue = function (value) {
        this.items.push(value);
        console.log("".concat(value, " is enqueued"));
        this.printQueue();
    };
    // Dequeue: Remove and return the value from the front of the queue
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            console.log("Queue is empty, nothing to dequeue");
            this.printQueue();
            return undefined;
        }
        var value = this.items.shift();
        console.log("".concat(value, " is dequeued"));
        this.printQueue();
        return value;
    };
    // isEmpty: Check if the queue is empty
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // Helper method to print the current queue
    Queue.prototype.printQueue = function () {
        console.log("Current queue: [".concat(this.items.join(", "), "]"));
    };
    return Queue;
}());
// Example usage:
console.log("For Numbers!");
var queue_numbers = new Queue();
queue_numbers.enqueue(1); // 1 is enqueued, Current queue: [1]
queue_numbers.enqueue(2); // 2 is enqueued, Current queue: [1, 2]
console.log(queue_numbers.dequeue()); // 1 is dequeued, Current queue: [2], returns 1
console.log(queue_numbers.isEmpty()); // Current queue: [2], returns false
console.log(queue_numbers.dequeue()); // 2 is dequeued, Current queue: [], returns 2
console.log(queue_numbers.isEmpty()); // Current queue: [], returns true
console.log(queue_numbers.dequeue()); // Queue is empty, nothing to dequeue, Current queue: [], returns undefined
console.log("\nFor Strings!");
var queue_string = new Queue();
queue_string.enqueue("bat"); // bat is enqueued, Current queue: [bat]
queue_string.enqueue("ball"); // ball is enqueued, Current queue: [bat, ball]
console.log(queue_string.dequeue()); // bat is dequeued, Current queue: [ball], returns "bat"
