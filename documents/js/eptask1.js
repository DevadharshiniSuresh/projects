let form = document.getElementById("form1");
let table = document.getElementById("t1");
let tbody = table.querySelector("tbody");
let btn = document.getElementById("btn");
let i = 1;

btn.addEventListener("click", () => {
let customerName = document.getElementById("input1").value;
let bikeNo = document.getElementById("input2").value;
let checkIn = document.getElementById("input3").value;
let checkOut = document.getElementById("input4").value;
let row = document.createElement("tr");

let col1 = document.createElement("td");
let col2 = document.createElement("td");
let col3 = document.createElement("td");
let col4 = document.createElement("td");
let col5 = document.createElement("td");
let col6 = document.createElement("td");

col1.textContent = i++;
col2.textContent = customerName;
col3.textContent = bikeNo;
col4.textContent = checkIn;
col5.textContent = checkOut;

let del = document.createElement("button");
del.textContent = "Delete";
del.addEventListener("click", () => {
    row.remove();
   
    let rows = tbody.children;
    for (let i = 0; i < rows.length; i++) {
        let col1 = rows[i].children[0];
        col1.textContent = i + 1; 
    }
    i = rows.length + 1; 

})
col6.appendChild(del);

row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);
row.appendChild(col4);
row.appendChild(col5);
row.appendChild(col6);
tbody.appendChild(row);
table.style.display = "block";

document.getElementById("input1").value = "";
document.getElementById("input2").value = "";
document.getElementById("input3").value = "";
document.getElementById("input4").value = "";
        });   