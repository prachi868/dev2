//async -> can be used before a function name!
//await -> can be used inside a async function!!
//IIFE -> Immediately invoked function expressions

const fs=require("fs");
console.log("start");
async function callMe(){
    console.log("hello");
    let f1KaPP=fs.promises.readFile("./f1.txt","utf8");
    let f2KaPP=fs.promises.readFile("./f2.txt","utf8");
    let bothFilesData=await Promise.all([f1KaPP,f2KaPP]);
    console.log(bothFilesData);
}
callMe();
console.log("end");
