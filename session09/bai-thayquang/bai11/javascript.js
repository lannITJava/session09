let number1 = +prompt("Nhập vào số thứ nhất");
let number2 = +prompt("Nhập vào số thứ hai");
let number3 = +prompt("Nhập vào số thứ ba");
let min = number1;
min = (min > number2) ? number2 : min;
min = (min > number3) ? number3 : min;
alert("Số nhỏ nhất là: " +min);
let max = number1;
max = (max < number2) ? number2 : max;
max = (max < number3) ? number3 : max;
alert("Số lớn nhất là: " +max);
