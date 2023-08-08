let username = prompt("Enter a username");
let password = prompt("Enter a password");

if (username ==="admin"&&password ==="1234"||username ==="john"&&password ==="qwerty") {
    alert("Hello"+" "+username);
}
else if ((username === ""||username === null)&&(password ===""||password === null)){
    alert("username is required");
    alert("password is required");
}
else if (username === ""||username === null){
    alert("username is required");
}
else if (password ===""||password === null) {
    alert("password is required");

}


else {
    alert("invalid username or password");
}

