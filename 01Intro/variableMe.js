"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
var greeting = "Hello World!";
// number
var userId = 456;
// boolean
var isLoggedIn = false;
var student = "Kamlesh Patni";
// any
var hello;
function getHello() {
    return "noma";
}
hello = getHello();
// function
function addTwo(num) {
    return num + 2;
}
addTwo(3);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("kunTa");
function signUpUser(name, email, password, isPaid) { }
// signUpUser(3, 4, 5, 5)
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Andreh", "a@gmail.om");
console.log("Learning ts");
console.log(greeting);
