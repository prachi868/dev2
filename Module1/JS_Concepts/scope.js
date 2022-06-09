//let is block scoped
//const is block scoped

//var -> function scope

/*var a=20;
console.log(a);    ->//20
if(true){
    var a=50;
    console.log(a);  =>//50
}
console.log(a);   ->//50   */

var a=20;
console.log(a);    ->//20
if(true){
    var a=50;
    console.log(a);  //->50
}
function call(){
    var a=100;
    console.log("inside");
    console.log(a);  ->//100
}
console.log(a);   ->50