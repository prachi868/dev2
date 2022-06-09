let fs=require("fs");
function myPromisifiedFun(filePath){
    return new Promise( function(scb,fcb){

        //async fun
        fs.readFile(filePath,function(error,data){
            if(error){
                fcb("data nhi aaya");
            }else{
                scb("testing success callback ");
            }
        })
    });//it will create a new promise object !!!  
}

let pendingPromise=myPromisifiedFun("./f1.txt");
pendingPromise.then(scb);
pendingPromise.then(fcb);

function scb(data){
    console.log(data+" ");
}
function fcb(error){
    console.log(error);
}