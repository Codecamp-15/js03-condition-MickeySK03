let a = prompt("Input a number");

//Guard-Clause
if (a === null || a.trim() ==='' || isNaN(a)) {
    alert("Invalid number");
}
else if (+a>0) {
    alert("Positive number");
}
else if (+a==0) {
    alert("Zero");
}
else if (+a<0) {
    alert("Negative number");
}


//isNaN() เช็คว่าไม่ใช่ตัวเลข