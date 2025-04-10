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
    private leaveDeduction: number; 

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

    setLeavesTaken(leaves: number): void {
        this.leavesTaken = leaves;
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


let permanentEmployee = new P_Emp("Tamil", 1, 50000, 2, 200); 
console.log(permanentEmployee);
console.log(`Total Earnings for ${permanentEmployee.name}: $${permanentEmployee.calculateEarnings()}`);

let temporaryEmployee = new T_Emp("Bharath", 2, 20, 40);
console.log(temporaryEmployee);
console.log(`Total Earnings for ${temporaryEmployee.name}: $${temporaryEmployee.calculateEarnings()}`);