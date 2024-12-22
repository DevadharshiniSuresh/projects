
let input=document.getElementById("input1")
input.addEventListener("focusout",()=>{
let p=input.value;
for(i=1;i<=p;i++){
    let mydiv=document.getElementById("mydiv")
    let para = document.createElement("p");
    para.id=`para${i}`
    para.textContent = `${i}) This is my content`;
    mydiv.appendChild(para);
}

})

let input1=document.getElementById("input2")
input1.addEventListener("input", () => {
    let change = input1.value;
    let content = document.getElementById(`para${change}`);
    if (content) {
        content.textContent = `${change}) This is the updated content`;
    }
});
