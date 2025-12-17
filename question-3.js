// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

const checkPasswordStrength = (userPassword) =>{
 let count = 0
 for (let item of userPassword){
    count ++
 }
 if(count > 10){
    return 'Strong'
 }else if (count >=6){
    return 'Medium'
 }else{
    return `Weak`
 }
}
userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword));
userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword))
userPassword = "abcde"
console.log(checkPasswordStrength(userPassword))