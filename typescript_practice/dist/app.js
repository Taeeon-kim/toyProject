"use strict";
let useInput;
let userName;
useInput = "ma";
if (typeof useInput === "string") {
    userName = useInput;
}
function ErrorMessage(message, code) {
    throw { message: message, errorCode: code };
}
ErrorMessage('this is Error test', 500);
