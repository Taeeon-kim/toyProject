"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
function clickHandler(message) {
    console.log("Click" + message);
}
button.addEventListener("click", clickHandler.bind(null, "1"));
const map = new Map();
