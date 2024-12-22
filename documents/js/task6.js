let mydiv=document.getElementById("mydiv");
let a=document.getElementById("anchor1");
let temp="none";
a.addEventListener("click",()=>
{
    if(temp=="none"){
    let reg=document.getElementById("reg");
    reg.style.display="block";
    temp="block";
    }
    else{
        reg.style.display="none";
 temp="none";
    }
})

// a.addEventListener("focusout",()=>{
//     reg.style.display="none";
// })

let a1=document.getElementById("login");
let login=document.getElementById("login_content");
a1.addEventListener("click",()=>{
    login.style.display="block";
})

let i=document.getElementById("icon")
i.addEventListener("click",()=>
{
    login.style.display="none"
})