// Queue.ts
class Queue<T> {
    private items: T[] = [];
  
    // Enqueue: Add a value to the rear of the queue
    enqueue(value: T): void {
      this.items.push(value);
    }
  
    // Dequeue: Remove and return the value from the front of the queue
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    // isEmpty: Check if the queue is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }

    print():void{
      console.log(this.items)
    }
  }
  
  // Example usage:

  console.log("For Numbers!");
  let queue_numbers = new Queue<number>();
  queue_numbers.enqueue(1);
  console.log(queue_numbers.print())
  queue_numbers.enqueue(2);
  console.log(queue_numbers.print())
  console.log(queue_numbers.dequeue()); // 1
  console.log(queue_numbers.print())
  console.log(queue_numbers.isEmpty()); // false
  console.log(queue_numbers.dequeue()); // 2
  console.log(queue_numbers.isEmpty()); // true
  console.log(queue_numbers.dequeue()); // undefined

  console.log("For String!");
  let queue_string=new Queue<string>();
  console.log(queue_string.print())
  queue_string.enqueue("bat");
  console.log(queue_string.print())
  queue_string.enqueue("ball");
  console.log(queue_string.print())
  console.log(queue_string.dequeue());
