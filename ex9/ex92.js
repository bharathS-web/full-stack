// import promptSync from 'prompt-sync';
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.print = function () {
        console.log(this.items);
    };
    return Stack;
}());
function stackMenu() {
    var numberStack = new Stack();
    var stringStack = new Stack();
    var prompt = require('prompt-sync')();
    while (true) {
        console.log("\nStack Menu:");
        console.log("1. Push to Number Stack");
        console.log("2. Pop from Number Stack");
        console.log("3. Push to String Stack");
        console.log("4. Pop from String Stack");
        console.log("0. Exit");
        var choice = prompt("Enter your choice: ");
        switch (choice) {
            case '1':
                var numToPush = parseInt(prompt("Enter a number to push: "));
                numberStack.push(numToPush);
                console.log("Pushed ".concat(numToPush, " to Number Stack."));
                break;
            case '2':
                console.log("Popped item from Number Stack:", numberStack.pop());
                break;
            case '3':
                var strToPush = prompt("Enter a string to push: ");
                stringStack.push(strToPush);
                console.log("Pushed \"".concat(strToPush, "\" to String Stack."));
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
