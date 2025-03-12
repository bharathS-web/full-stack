const fs=require('fs');
const inputstr=fs.readFile("D:\\full-stack\\ex4\\test.txt",function(err,data)
{
    if(err){
        console.error(err.message);
    }
    else{
        const regex=/a{2,}/;
        const repl='b';
        data=data.toString();
        const result=data.replace(regex,repl);
        console.log(result);
    }

});

