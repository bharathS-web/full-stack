const urls="https://google.com:8000";

const {URL}=require("url");

const myurl=new URL(urls);

// const myurl = URL.parse(urls,true);

console.log(myurl.protocol);
console.log(myurl.hostname);
console.log(myurl.port);