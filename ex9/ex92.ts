// import promptSync from 'prompt-sync';

class Stack<T> {
    
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    print() : void{
        console.log(this.items)
    } 

}


function stackMenu() {
    const numberStack = new Stack<number>();
    const stringStack = new Stack<string>();
    const prompt = require('prompt-sync')();

    while (true) {
        console.log("\nStack Menu:");
        console.log("1. Push to Number Stack");
        console.log("2. Pop from Number Stack");
        console.log("3. Push to String Stack");
        console.log("4. Pop from String Stack");
        console.log("0. Exit");
        const choice = prompt("Enter your choice: ");

        switch (choice) {
            case '1':
                const numToPush = parseInt(prompt("Enter a number to push: "));
                numberStack.push(numToPush);
                console.log(`Pushed ${numToPush} to Number Stack.`);
                break;

            case '2':
                console.log("Popped item from Number Stack:", numberStack.pop());
                break;

            case '3':

                const strToPush = prompt("Enter a string to push: ");
                stringStack.push(strToPush);
                console.log(`Pushed "${strToPush}" to String Stack.`);
                break;

            case '4':
                console.log("Popped item from String Stack:", stringStack.pop());
                break;

            case '5':
                numberStack.print();
                stringStack.print();
                break;

            case '0':
                console.log("Exiting...");
                return;

            default:
                console.log("Invalid choice. Please try again.");
        }

    }

}

stackMenu();