"use strict";
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    return cb(result);
}
let someValue;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
function sendRequest(data, cb) {
    return cb({ data: "Success" });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
function aa(number) {
    return "2";
}
console.log(aa(2));
