// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

let promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

const calculateTotalPrice = (cart, disCount) => {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }
  console.log(totalPrice);
  if (disCount === "SALE50") {
    return totalPrice * 0.5;
  } else if (disCount === "SALE20") {
    return totalPrice * 0.8;
  } else {
    return totalPrice;
  }
};


promotionCode = "SALE50"
console.log(calculateTotalPrice(products, promotionCode));
promotionCode = "SALE20"
console.log(calculateTotalPrice(products, promotionCode));
promotionCode =``
console.log(calculateTotalPrice(products, promotionCode));
