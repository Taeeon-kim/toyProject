// import React from "react";

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}= ${value}; expires=${date.toUTCString()}`;
};

const getCookie = (name) => {
  let value = "; " + document.cookie;

  let parts = value.split(`; ${name}=`); // aa=xx; aaa; abbb=ssss;
//   console.log(parts)
//   console.log(parts.pop())

  if (parts.length === 2) {
    return parts.pop().split(";").shift();   // pop은 마지막 인덱스를 제거하고 그 요소를 반환,shift는 첫번재인덱스를 제거하고 그 제거된걸 반환해줌. 따라서 id 를 위에 split 하면 '', 'perl; user_pwd=ppp'
                                        //이되므로 pop을 쓰면 마지막인덱스요소 'perl; user_pwd=pppp'가 남음 그리고 다시 ;로 나누어서 perl, user_pwd=ppp 가 되게하고, shift 를 하면 perl을 반환함.
  }
};
const deleteCookie = (name, pwd) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);

  document.cookie = name + "=; expires=" + date;
  document.cookie = pwd + "=; expires=" + date;
  console.log(document.cookie);
};

export { setCookie, getCookie, deleteCookie };
