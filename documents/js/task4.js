let form=document.getElementById("form1")
let table=document.getElementById("t1")
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let input=document.getElementById("input1").value;
    let input1=document.getElementById("input2").value;
    let input2=document.getElementById("input3").value;
    let input3=document.getElementById("input4").value;
    let col1=document.getElementById("c1");
    let col2=document.getElementById("c2");
    let col3=document.getElementById("c3");
    let col4=document.getElementById("c4");
    col1.textContent=input;
    col2.textContent=input1;
    col3.textContent=input2;
    col4.textContent=input3;
    table.style.display="block";
})