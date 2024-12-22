let div1=document.getElementById("div1")
let div2=document.getElementById("div2")
let btn=document.getElementById("btn")
btn.addEventListener("click", ()=>{
    let input=document.getElementById("input1").value
    let input1=document.getElementById("input2").value
    let sum=Number(input)+Number(input1);
    console.log(sum);
    document.getElementById("para")
    document.getElementById("p1").textContent=`your result of sum=${sum}`
    div2.style.display="block";
    div1.style.opacity=1;
    div2.style.opacity= 0.8;
})
let btn1=document.getElementById("btn1")
btn1.addEventListener("click", ()=>{
    let input=document.getElementById("input1").value
    let input1=document.getElementById("input2").value
    let sub=Number(input)-Number(input1);
    console.log(sub);
    document.getElementById("para")
    document.getElementById("p2").textContent=`your result of sub=${sub}`
    div2.style.display="block";
    div1.style.opacity=1;
    div2.style.opacity= 0.8;
})
let btn2=document.getElementById("btn2")
btn2.addEventListener("click", ()=>{
    let input=document.getElementById("input1").value
    let input1=document.getElementById("input2").value
    let divide=Number(input)/Number(input1);
    console.log(divide);
    document.getElementById("para")
    document.getElementById("p3").textContent=`your result of div=${divide}`
    div2.style.display="block";
    div1.style.opacity=1;
    div2.style.opacity= 0.8;
})
let restart=document.getElementById("restart");
restart.addEventListener("click",()=>{
    div2.style.display="none"
})
