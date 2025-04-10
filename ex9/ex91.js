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
var Emp = /** @class */ (function () {
    function Emp(n, id) {
        this.name = n;
        this.id = id;
    }
    return Emp;
}());
var P_Emp = /** @class */ (function (_super) {
    __extends(P_Emp, _super);
    function P_Emp(n, id, salary, leavesTaken, leaveDeduction) {
        if (leavesTaken === void 0) { leavesTaken = 0; }
        if (leaveDeduction === void 0) { leaveDeduction = 0; }
        var _this = _super.call(this, n, id) || this;
        _this.mon_salary = salary;
        _this.leavesTaken = leavesTaken;
        _this.leaveDeduction = leaveDeduction;
        return _this;
    }
    P_Emp.prototype.calculateEarnings = function () {
        // Calculate total deductions based on leaves taken
        var totalDeductions = this.leavesTaken * this.leaveDeduction;
        return this.mon_salary - totalDeductions;
    };
    // Method to set leaves taken
    P_Emp.prototype.setLeavesTaken = function (leaves) {
        this.leavesTaken = leaves;
    };
    return P_Emp;
}(Emp));
var T_Emp = /** @class */ (function (_super) {
    __extends(T_Emp, _super);
    function T_Emp(n, id, hrlyRate, hrWorked) {
        var _this = _super.call(this, n, id) || this;
        _this.hrly_rate = hrlyRate;
        _this.hr_worked = hrWorked;
        return _this;
    }
    T_Emp.prototype.calculateEarnings = function () {
        return this.hrly_rate * this.hr_worked;
    };
    return T_Emp;
}(Emp));
var permanentEmployee = new P_Emp("Tamil", 1, 50000, 2, 200); // 2 leaves taken, $200 deduction per leave
console.log(permanentEmployee);
console.log("Total Earnings for ".concat(permanentEmployee.name, ": $").concat(permanentEmployee.calculateEarnings()));
var temporaryEmployee = new T_Emp("Bharath", 2, 20, 40);
console.log(temporaryEmployee);
console.log("Total Earnings for ".concat(temporaryEmployee.name, ": $").concat(temporaryEmployee.calculateEarnings()));
