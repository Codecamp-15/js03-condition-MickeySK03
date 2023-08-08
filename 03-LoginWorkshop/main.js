let user = prompt("Enter username");


if (user === 'codecamp') {
    let p = prompt("Enter a password");
    if (p === "123456") {
        user = "codecamp";
        alert(`Welcome ${user}`);
    }
    else {
        alert("Wrong password");
    }
}
else  {
    user = "guest";
    alert(`Welcome guest`);
}
