let temp=0;
let res;
let a=document.getElementById("anchor")
let start=document.getElementById("start");
start.addEventListener("click",start1);
function start1(){
   res=setInterval(()=>{

   let h1=document.getElementById("head");
    h1.textContent=`wait:${temp++}`;
},1000);
setTimeout(()=>{
    alert("this will take you to pixabay.com");

    anchor.click();
    
},12000)
start.removeEventListener("click",start1)
}


let stop1=document.getElementById("stop");
stop1.addEventListener("click",stop2);
function stop2(){
    let icon=document.getElementById("icon")
icon.style.display="block";
     let h1=document.getElementById("head");
    h1.textContent=` window has been launced in :${temp++}`;
    clearInterval(res);
    start.addEventListener("click",start1)
}
