//?
// let input = document.getElementById("list");
// let todo = document.getElementById("todo");

// input.addEventListener("focusout", () => {
//     // Allow empty or space-only values
//     let cb = document.createElement("input");
//     cb.type = "checkbox";
//      let del=document.createElement("button");
//      del.textContent="Delete";
//     let para = document.createElement("p");
//     para.textContent = input.value; // Use the value as is, including spaces
    
//     todo.appendChild(cb);
//     todo.appendChild(para);
//     todo.appendChild(del);
//     cb.addEventListener("change", () => {
//         if (cb.checked) {
//             para.classList.add("strike"); // Add strike-through class
//         } else {
//             para.classList.remove("strike"); // Remove strike-through class
//         }
//     });
//     del.addEventListener("click",()=>{
//         cb.remove();
//         del.remove();
//         para.remove();
//     })
//     // Clear the input field for new entries
//     input.value = "";
// });

let input = document.getElementById("list");
let todo = document.getElementById("todo");

input.addEventListener("focusout", () => {
if (input.value !== "") { 
    let Container = document.createElement("div");
    Container.classList.add("list-item");
    let cb = document.createElement("input");
    cb.type = "checkbox";
    let para = document.createElement("p");
    para.textContent = input.value;
    let del = document.createElement("button");
    del.textContent = "Delete";
    cb.addEventListener("change", () => {
    if (cb.checked) {
        para.classList.add("strike");
    } 
    else {
            para.classList.remove("strike");
        }
});

del.addEventListener("click", () => {
Container.remove(); 
});

Container.appendChild(cb);
Container.appendChild(para);
Container.appendChild(del);
todo.appendChild(Container);
input.value = "";
}
});