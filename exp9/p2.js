"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 },
    { id: 3, name: 'Tablet', price: 299 },
];
var getProductById = function (id) {
    return products.find(function (product) { return product.id === id; });
};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the product ID to search: ', function (input) {
    var id = parseInt(input);
    var product = getProductById(id);
    if (product) {
        console.log("Product found: ".concat(product.name, " - $").concat(product.price));
    }
    else {
        console.log('Product not found.');
    }
    rl.close();
});
