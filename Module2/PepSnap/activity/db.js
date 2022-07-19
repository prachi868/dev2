//initialize db
let db;
let dbOpenRequest=indexedDB.open("Gallery" ,1);
dbOpenRequest.onupgradeneeded = function(e){
    db=e.target.result;
    db.createObjectStore("Media", { keyPath:"mid" }); // table will only create when db is create first time
}
dbOpenRequest.onsuccess = function(e){
    db=e.target.result;
}
dbOpenRequest.onerror=function(e){
    alert("inside on error");
}