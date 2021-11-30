import React from "react";

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}= ${value}; expires=${date.toUTCString()}`;
};

const getCookie = (name) => {
  let value = "; " + document.cookie;
  console.log(value);
  let parts = value.split(`; ${name}=`); // aa=xx; aaa; abbb=ssss;

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};
const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);

  document.cookie = name + "=; expires=" + date;
  console.log(document.cookie);
};

export { setCookie, getCookie, deleteCookie };
