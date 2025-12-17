// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

 let minProduct = Infinity
 let nameProduct = ``

 for (let item of inventory){
  if(item.quantity < minProduct){
    minProduct = item.quantity
    nameProduct = item.name
  }
 }


 let result = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${nameProduct} ซึ่งมี ${minProduct} ชิ้น`
 console.log(result);
 