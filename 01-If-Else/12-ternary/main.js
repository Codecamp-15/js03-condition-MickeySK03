let login = prompt("Enter a score");

let grade = login >=80&&login <=100
    ? "A"
    : login >=70&&login <=79
    ? "B"
    : login >=60&&login <=69
    ? "C"
    : login >=50&&login <=59
    ? "D"
    : login >=0&&login <50
    ? "F"
    : "Invalid score"

alert(grade);