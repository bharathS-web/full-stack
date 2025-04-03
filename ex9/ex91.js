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
    function P_Emp(n, id, salary) {
        var _this = _super.call(this, n, id) || this;
        _this.mon_salary = salary;
        return _this;
    }
    P_Emp.prototype.calculateEarnings = function () {
        return this.mon_salary;
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
var permanentEmployee = new P_Emp("Tamil", 1, 50000);
console.log(permanentEmployee);
console.log("Total Earnings for ".concat(permanentEmployee.name, ": $").concat(permanentEmployee.calculateEarnings()));
var temporaryEmployee = new T_Emp("Bharath", 2, 20, 40);
console.log(temporaryEmployee);
console.log("Total Earnings for ".concat(temporaryEmployee.name, ": $").concat(temporaryEmployee.calculateEarnings()));
