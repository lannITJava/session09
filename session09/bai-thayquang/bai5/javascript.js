let rate = +prompt("Hệ số lương:");
let basicSalary = +prompt("Lương cơ bản:");
let commission = +prompt("Tỷ lệ hoa hồng:");
let basic = (rate+commission)*basicSalary;
document.write("Lương của bạn là: " +basic);