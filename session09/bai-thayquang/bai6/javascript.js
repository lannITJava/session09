let studentId = prompt("Nhập mã sinh viên:");
let studentName = prompt("Nhập tên sinh viên:");
let studentAge = +prompt("Nhập tuổi sinh viên:");
let htmlPoint = +prompt("Nhập điểm HTML:");
let cssPoint = +prompt("Nhập điểm CSS:");
let jsPoint = +prompt("Nhập điểm Javascript:");
let mediumScore = (htmlPoint+cssPoint+jsPoint)/3;
document.write("Mã sinh viên: " +studentId);
document.write("Tên sinh viên: " +studentName);
document.write("Tuổi sinh viên: " +studentAge);
document.write("Điểm trung bình: " +mediumScore);

