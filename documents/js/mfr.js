// Step 1: Fetch the rows from the original table
let tab = document.querySelectorAll("tbody tr");

// Convert NodeList to an array, calculate updated salaries, and exclude the header row
let row = Array.from(tab).map((row) => ({
    sno: row.children[0].textContent,
    name: row.children[1].textContent,
    location: row.children[2].textContent,
    salary: Number(row.children[3].textContent) + 200 // Update salary to `sal+200`
        }));
    console.log(row)

// Step 2: Create the updated `sal+200` table (no header row, updated salaries)
function sal(data) {
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
data.forEach((row) =>
{
let tr = document.createElement("tr");

let tdSno = document.createElement("td");
tdSno.textContent = row.sno;
tr.appendChild(tdSno);
let tdName = document.createElement("td");
tdName.textContent = row.name;
tr.appendChild(tdName);
let tdLocation = document.createElement("td");
tdLocation.textContent = row.location;
tr.appendChild(tdLocation);
let tdSalary = document.createElement("td");
tdSalary.textContent = row.salary; // Updated salary
tr.appendChild(tdSalary);
tbody.appendChild(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);
 }
function table3(data) {
let filteredData = data.filter((row) => row.salary > 2500);

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
filteredData.forEach((row, index) => {
let tr = document.createElement("tr");
let tdSno = document.createElement("td");
tdSno.textContent = index + 1; // Re-number S.no for filtered rows
tr.appendChild(tdSno);

let tdName = document.createElement("td");
tdName.textContent = row.name;
tr.appendChild(tdName);

let tdLocation = document.createElement("td");
tdLocation.textContent = row.location;
tr.appendChild(tdLocation);

let tdSalary = document.createElement("td");
tdSalary.textContent = row.salary; // Salary from `sal+200` table
tr.appendChild(tdSalary);

tbody.appendChild(tr);
});
console.log(filteredData)
table.appendChild(tbody);
document.body.appendChild(table);
}

sal(row);

table3(row);
