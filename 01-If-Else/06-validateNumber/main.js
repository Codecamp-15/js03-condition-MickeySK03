let a = prompt("input a 1st number");
let b = prompt("input a 2nd number");
let c = a+b;

if (c === null || c.trim() ===''|| isNaN(c)) {
    alert("Invalid number");
}
else alert(c);