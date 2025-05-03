"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Get user input
var name = readlineSync.question('What is your name? ');
// Output the result
console.log("Hello, ".concat(name, "!"));
