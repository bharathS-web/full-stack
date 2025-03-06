const obj={name:"Arun",Age:25,city:"Madurai"};
for (const prop in obj)
{
    console.log(`${prop}:${obj[prop]}`);
}
delete obj['city'];
for (const prop in obj)
{
    console.log(`${prop}:${obj[prop]}`);
}