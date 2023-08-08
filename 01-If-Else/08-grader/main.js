let s = prompt("Enter a score");

if (s>=80&&s<=100) {
    alert("A");
}
else if (s>=70&&s<=79){
    alert("B");
}
else if (s>=60&&s<=69) {
    alert("C");
}
else if (s>=50&&s<=59) {
    alert("D");
}
else if (s<50&&s>=0) {
    alert("F");
}
else alert("invalid score");

