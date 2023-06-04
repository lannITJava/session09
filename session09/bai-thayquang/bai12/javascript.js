let number = +prompt("Nhập vào số có ba chữ số");
let tram = Math.floor(number / 100);
let chuc = Math.floor((number%100)/10);
let dvi = number%10;
console.log("Số đảo ngược là: " + dvi + chuc + tram);