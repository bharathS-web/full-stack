// Queue.ts
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    // Enqueue: Add a value to the rear of the queue
    Queue.prototype.enqueue = function (value) {
        this.items.push(value);
    };
    // Dequeue: Remove and return the value from the front of the queue
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    // isEmpty: Check if the queue is empty
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.print = function () {
        console.log(this.items);
    };
    return Queue;
}());
// Example usage:
console.log("For Numbers!");
var queue_numbers = new Queue();
queue_numbers.enqueue(1);
console.log(queue_numbers.print());
queue_numbers.enqueue(2);
console.log(queue_numbers.print());
console.log(queue_numbers.dequeue()); // 1
console.log(queue_numbers.print());
console.log(queue_numbers.isEmpty()); // false
console.log(queue_numbers.dequeue()); // 2
console.log(queue_numbers.isEmpty()); // true
console.log(queue_numbers.dequeue()); // undefined
console.log("For String!");
var queue_string = new Queue();
console.log(queue_string.print());
queue_string.enqueue("bat");
console.log(queue_string.print());
queue_string.enqueue("ball");
console.log(queue_string.print());
console.log(queue_string.dequeue());
