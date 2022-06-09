console.log(a);    ->//undefined
console.log(fun);    ->//undefind
fun();     -> //fun is not a function

var a = 20;
var fun = function(){
    console.log("Fun Says Hi !!!");
}

console.log(a);    //cannot access a
console.log(fun);
fun();

let a = 20;
let fun = function(){
    console.log("Fun Says Hi !!!");
}