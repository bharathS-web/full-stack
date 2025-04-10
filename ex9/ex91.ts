import * as readline from 'readline';

class Emp {
    name: string;
    readonly id: number;

    constructor(n: string, id: number) {
        this.name = n;
        this.id = id;
    }
}

class P_Emp extends Emp {
    private mon_salary: number; 
    private leavesTaken: number; 
    private leaveDeduction: number; // Deduction per leave

    constructor(n: string, id: number, salary: number, leavesTaken: number = 0, leaveDeduction: number = 0) {
        super(n, id); 
        this.mon_salary = salary;
        this.leavesTaken = leavesTaken;
        this.leaveDeduction = leaveDeduction;
    }

    calculateEarnings(): number {
        const totalDeductions = this.leavesTaken * this.leaveDeduction;
        return this.mon_salary - totalDeductions;
    }
}

class T_Emp extends Emp {
    hrly_rate: number;
    hr_worked: number;

    constructor(n: string, id: number, hrlyRate: number, hrWorked: number) {
        super(n, id); 
        this.hrly_rate = hrlyRate;
        this.hr_worked = hrWorked;
    }

    calculateEarnings(): number {
        return this.hrly_rate * this.hr_worked;
    }
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get input for permanent employee
function getPermanentEmployeeInput() {
    rl.question('Enter name for Permanent Employee: ', (name) => {
        rl.question('Enter ID for Permanent Employee: ', (id) => {
            rl.question('Enter monthly salary for Permanent Employee: ', (salary) => {
                rl.question('Enter number of leaves taken: ', (leaves) => {
                    rl.question('Enter leave deduction amount: ', (deduction) => {
                        const permanentEmployee = new P_Emp(name, parseInt(id), parseFloat(salary), parseInt(leaves), parseFloat(deduction));
                        console.log(permanentEmployee);
                        console.log(`Total Earnings for ${permanentEmployee.name}: $${permanentEmployee.calculateEarnings()}`);
                        getTemporaryEmployeeInput(); // Proceed to get temporary employee input
                    });
                });
            });
        });
    });
}

// Function to get input for temporary employee
function getTemporaryEmployeeInput() {
    rl.question('Enter name for Temporary Employee: ', (name) => {
        rl.question('Enter ID for Temporary Employee: ', (id) => {
            rl.question('Enter hourly rate for Temporary Employee: ', (hrlyRate) => {
                rl.question('Enter hours worked for Temporary Employee: ', (hoursWorked) => {
                    const temporaryEmployee = new T_Emp(name, parseInt(id), parseFloat(hrlyRate), parseInt(hoursWorked));
                    console.log(temporaryEmployee);
                    console.log(`Total Earnings for ${temporaryEmployee.name}: $${temporaryEmployee.calculateEarnings()}`);
                    rl.close(); // Close the readline interface
                });
            });
        });
    });
}

getPermanentEmployeeInput();