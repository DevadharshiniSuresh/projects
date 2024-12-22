//!promise is inbuild js object
//promise to handle asynchronous operation
//promise will have 2 states-->fulfilled, reject
//fulfiled will handled using then. rej->catch

// let prom1=new Promise((resolve,reject)=>{
//     let x=5;
//     if(x==5){
//         resolve(x);
//     }
//     else{
//         reject("x is not equal to 5");
//     }
// });

// // //?when we use multiple then-->promise chaining

// prom1
// .then((data)=>{
//     console.log(data);
//     // console.log(prom1);
//     return data;
// })
// .then((data)=>{
//     console.log(data + 2);
// })
// .catch((data1)=>{
//     console.log(data1);
//     console.log(prom1);
// });

//?fetch-->inbuild method in js
//it will make http req from server
//!fetch will return promise
//to interact with api

let prom=fetch("https://fakestoreapi.com/products");
console.log(prom);
let str="";
prom
.then((data)=>{
    console.log(data);
    return data.json();
})

.then((data)=>{
    console.log(data);
    data.map((element)=>{
        str +=`<div class="content">
        <h1> ${element.title}</h1>
        <img src="${element.image}" height="200px" width="200px"></img>
        <p><b>Description:</b> ${element.description}</p>
        <p><b>Category:</b> ${element.category}</p>
         <p><b>Price:</b> ${element.price}</p>
        <button>Add to cart</button>
          </div>`;
      
    });
          console.log(str);
          let container=document.getElementById("container");
          container.innerHTML=str;
})
.catch(()=>{
console.log("error");
console.log(prom);
});



// let place="chennai";
// let key="2ad864b8c66fbf1e48caa02088e78306";
// let prom=fetch(
// `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
// );
// console.log(prom);
// prom
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(Math.round(Number(data.main.temp - 273)));
// })
// .catch(()=>{
//     console.log("please enter proper city name");
// });


//!task
// let div=document.getElementById("temp")
// let key="2ad864b8c66fbf1e48caa02088e78306";
// let select=document.getElementById("city");
// let place=select.value;

// let prom=fetch(
// `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
// );
// let ip1=document.getElementById("chn");
// let ip2=document.getElementById("cbe");
// let ip3=document.getElementById("blr");
// if(place=="Chennai"){
//     div.style.backgroundImage="url('https://cdn.pixabay.com/photo/2024/03/18/02/40/whooper-swans-8640045_1280.jpg')";
// }
// prom
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(Math.round(Number(data.main.temp - 273)));
// })
// .catch(()=>{
//     console.log("please enter proper city name");
// });


//async await

// console.log("start");
// let num=25;
// async function checkstr(param) {
//     console.log("a");
//     let res = await checknum(param);
//     console.log("b");
//     return res;
// }
// console.log("c");
// function checknum(a1){
//     return new Promise((resolve, reject) => {
//         if(typeof a1 == "number"){
//             resolve("given value is a number");
//         }
//         else{
//             reject("given value is not a number")
//         }
//     });
// }
// console.log("d");

// let prom=checkstr(num);
// console.log("e");
// console.log(prom);

// prom
// .then((data)=>{
//     console.log(data);
//     console.log(prom);
// })

// prom
// .catch((data)=>{
//     console.log(data);
//     console.log(prom);
 
// })

// let place="chennai";
// let key="2ad864b8c66fbf1e48caa02088e78306";
// let prom=fetch(
// `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
// );
// // console.log(prom);
// async function fun(place){
//     let res = await check(place);
//     return res;
// }
// prom
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(Math.round(Number(data.main.temp - 273)));
// })
// .catch(()=>{
//     console.log("please enter proper city name");
// });
