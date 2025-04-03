class Emp {
    name: string;
    readonly id: number;

    constructor(n: string, id: number) {
        this.name = n;
        this.id = id;
    }
}

class P_Emp extends Emp {
    mon_salary: number; 

    constructor(n: string, id: number, salary: number) {
        super(n, id); 
        this.mon_salary = salary;
    }

    calculateEarnings(): number {
        return this.mon_salary;
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

let permanentEmployee = new P_Emp("Tamil", 1, 50000);
console.log(permanentEmployee);
console.log(`Total Earnings for ${permanentEmployee.name}: $${permanentEmployee.calculateEarnings()}`);

let temporaryEmployee = new T_Emp("Bharath", 2, 20, 40);
console.log(temporaryEmployee);

console.log(`Total Earnings for ${temporaryEmployee.name}: $${temporaryEmployee.calculateEarnings()}`);