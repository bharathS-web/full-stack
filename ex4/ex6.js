const obj={name:"Bharath",Age:20,city:"MRP"};

for (const prop in obj)
{
    console.log(`${prop}:${obj[prop]}`);
}
console.log("\n");

delete obj['city'];

for (const prop in obj)
{
    console.log(`${prop}:${obj[prop]}`);
}

console.log(Object.keys(obj).length)

