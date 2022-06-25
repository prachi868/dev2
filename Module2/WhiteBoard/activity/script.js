let canvas=document.querySelector("#canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight - 100;
window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight - 100;  
})
//a context object which provides fun for 2d drawing
let ctx=canvas.getContext("2d");
//console.log(ctx);
//ctx.fillStyle="yellow";
//xoffset,yoffset,width,height
//ctx.fillRect(10,10,150,100);
let isPenDown=false;
canvas.addEventListener("mousedown",function(e){
    isPenDown=true;
    let x=e.clientX;
    let y=e.clientY - 100;
    ctx.beginPath();
    ctx.moveTo(x,y);
})
canvas.addEventListener("mousemove",function(e){
    if(isPenDown){
        let x=e.clientX;
        let y=e.clientY - 100;
        ctx.lineTo(x,y);
        ctx.stroke();
    }
})
canvas.addEventListener("mouseup",function(e){
    isPenDown=false;
})