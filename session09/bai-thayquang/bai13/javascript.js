let number = +prompt("Nhập vào một chữ số");
let remainder = (number % 3 == 0) ? 0 : ((number%3 == 1) ? 1:2);
console.log("Số dư trong phép chia 3: ", remainder);