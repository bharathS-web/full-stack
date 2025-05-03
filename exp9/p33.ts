class Queue {
    private items: any[] = [];

    // Enqueue: Add a value to the rear of the queue
    enqueue(value: any): void {
        this.items.push(value);
        console.log(`${value} is enqueued`);
        this.printQueue();
    }

    // Dequeue: Remove and return the value from the front of the queue
    dequeue(): any {
        if (this.isEmpty()) {
            console.log("Queue is empty, nothing to dequeue");
            this.printQueue();
            return undefined;
        }
        const value = this.items.shift();
        console.log(`${value} is dequeued`);
        this.printQueue();
        return value;
    }

    // isEmpty: Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Helper method to print the current queue
    private printQueue(): void {
        console.log(`Current queue: [${this.items.join(", ")}]`);
    }
}

// Example usage:
console.log("For Numbers!");
const queue_numbers = new Queue();
queue_numbers.enqueue(1);           
queue_numbers.enqueue(2);           
console.log(queue_numbers.dequeue()); 
console.log(queue_numbers.isEmpty()); 
console.log(queue_numbers.dequeue()); 
console.log(queue_numbers.isEmpty()); 
console.log(queue_numbers.dequeue()); 

console.log("\nFor Strings!");
const queue_string = new Queue();
queue_string.enqueue("bat");        
queue_string.enqueue("ball");       
console.log(queue_string.dequeue()); 