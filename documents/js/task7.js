let password=document.getElementById("pass");
let cpass=document.getElementById("cpass");

let pwd=document.getElementById("pwd");
let cpwd=document.getElementById("cpwd");
let match=document.getElementById("match");
let notmatch=document.getElementById("notmatch");


cpwd.addEventListener("focusout",()=>{
    if(pwd.value == cpwd.value){
            match.style.display="block";
            notmatch.style.display="none";
    }
       else{
        notmatch.style.display="block";
        match.style.display="none";
       } 
    })

let uname=document.getElementById("uname");
pwd.addEventListener("focusout", ()=>{
    if(uname.value==""){
        let msg=document.getElementById("msg");
        msg.style.display="block";    
    }
})

let temp="none"
let icon=document.getElementById("icon");
icon.addEventListener("click",()=>{
    if(temp=="none"){
    cpwd.setAttribute("type","text");
    temp="block"
    }
    else{
        cpwd.setAttribute("type","password");
  temp="none"
    }
    // notmatch.style.display="none";
    // match.style.display="none";

})