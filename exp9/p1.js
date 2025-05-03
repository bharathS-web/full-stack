"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Base class
var AccountHolder = /** @class */ (function () {
    function AccountHolder(name, accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
    AccountHolder.prototype.displayDetails = function () {
        console.log("Account Holder: ".concat(this.name));
        console.log("Account Number: ".concat(this.accountNumber));
    };
    return AccountHolder;
}());
// Derived class
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(name, accountNumber, balance) {
        if (balance === void 0) { balance = 0; }
        var _this = _super.call(this, name, accountNumber) || this;
        _this.balance = balance;
        return _this;
    }
    BankAccount.prototype.credit = function (amount) {
        this.balance += amount;
        console.log("Credited \u20B9".concat(amount, ". New Balance: \u20B9").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
        }
        else {
            this.balance -= amount;
            console.log("Withdrawn \u20B9".concat(amount, ". Remaining Balance: \u20B9").concat(this.balance));
        }
    };
    BankAccount.prototype.checkBalance = function () {
        console.log("Current Balance: \u20B9".concat(this.balance));
    };
    return BankAccount;
}(AccountHolder));
// CLI
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var user = new BankAccount("Dhiran", "1234567890", 1000);
function showMenu() {
    console.log("\n--- Bank Menu ---");
    console.log("1. View Account Details");
    console.log("2. Credit");
    console.log("3. Withdraw");
    console.log("4. Check Balance");
    console.log("5. Exit");
    rl.question("Choose an option: ", handleMenu);
}
function handleMenu(option) {
    switch (option) {
        case '1':
            user.displayDetails();
            showMenu();
            break;
        case '2':
            rl.question("Enter amount to credit: ", function (amount) {
                user.credit(parseFloat(amount));
                showMenu();
            });
            break;
        case '3':
            rl.question("Enter amount to withdraw: ", function (amount) {
                user.withdraw(parseFloat(amount));
                showMenu();
            });
            break;
        case '4':
            user.checkBalance();
            showMenu();
            break;
        case '5':
            console.log("Thank you for banking with us!");
            rl.close();
            break;
        default:
            console.log("Invalid option. Try again.");
            showMenu();
    }
}
showMenu();
