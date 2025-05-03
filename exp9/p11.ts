import * as readline from 'readline';

// Base class
class AccountHolder {
  protected name: string;
  protected accountNumber: string;

  constructor(name: string, accountNumber: string) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  displayDetails(): void {
    console.log(`\nAccount Holder: ${this.name}`);
    console.log(`Account Number: ${this.accountNumber}`);
  }
}

// Derived class
class BankAccount extends AccountHolder {
  private balance: number;

  constructor(name: string, accountNumber: string, balance: number = 0) {
    super(name, accountNumber);
    this.balance = balance;
  }

  credit(amount: number): void {
    this.balance += amount;
    console.log(`Credited ₹${amount}. New Balance: ₹${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ₹${amount}. Remaining Balance: ₹${this.balance}`);
    }
  }

  checkBalance(): void {
    console.log(`Current Balance: ₹${this.balance}`);
  }
}

// CLI setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let user: BankAccount;

// Ask user to create an account first
function createAccount(): void {
  rl.question("Enter your name: ", (name) => {
    rl.question("Enter your account number: ", (accountNumber) => {
      rl.question("Enter initial balance: ", (initialBalance) => {
        const balance = parseFloat(initialBalance);
        user = new BankAccount(name, accountNumber, balance);
        console.log("\n✅ Account created successfully!");
        showMenu();
      });
    });
  });
}

// Show bank operations menu
function showMenu(): void {
  console.log("\n--- Bank Menu ---");
  console.log("1. View Account Details");
  console.log("2. Credit");
  console.log("3. Withdraw");
  console.log("4. Check Balance");
  console.log("5. Exit");
  rl.question("Choose an option: ", handleMenu);
}

// Handle user selection
function handleMenu(option: string): void {
  switch (option) {
    case '1':
      user.displayDetails();
      showMenu();
      break;
    case '2':
      rl.question("Enter amount to credit: ", (amount) => {
        user.credit(parseFloat(amount));
        showMenu();
      });
      break;
    case '3':
      rl.question("Enter amount to withdraw: ", (amount) => {
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

// Start the app
createAccount();
