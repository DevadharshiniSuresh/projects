let sec=document.getElementsByClassName("read")
document.addEventListener("click", (element) => {
    if (element.target.tagName == "BUTTON" && element.target.className=="read") {
        let span = element.target.nextElementSibling; 
        if (span) {
            span.style.display = "inline";
            element.target.style.display = "none";
        }
    }
});













// let btn=document.getElementById("rm");
// btn.addEventListener("click",()=>{
//     let span=document.getElementById("span1");
//     span.style.display="inline";
//     btn.style.display="none"
// })

// let btn1=document.getElementById("rm1");
// btn1.addEventListener("click",()=>{
//     let span2=document.getElementById("span2");
//     span2.style.display="inline";
//     btn1.style.display="none"
// })

// let btn2=document.getElementById("rm2");
// btn2.addEventListener("click",()=>{
//     let span3=document.getElementById("span3");
//     span3.style.display="inline";
//     btn2.style.display="none"
// })

// let btn3=document.getElementById("rm3");
// btn3.addEventListener("click",()=>{
//     let span4=document.getElementById("span4");
//     span4.style.display="inline";
//     btn3.style.display="none"
// })