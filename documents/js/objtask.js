let marker={
    color:"black",
    brand:"camlin",
    price:25,
};

console.log(marker);
console.log(marker.price);
marker["color"]="blue";
console.log(marker);
marker.shape="cylinder";
console.log(marker);
delete marker.brand;
console.log(marker)