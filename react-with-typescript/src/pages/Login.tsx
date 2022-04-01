import React, { useRef, useState } from "react";
import { IdCheck, PwCheck } from "../shared/regex";
import example_log from "../static/image/example_logo.png";
import {useNavigate} from 'react-router-dom';



const Login: React.FC = (props) => {
  const Id = useRef<HTMLInputElement>(null);
  const Pwd = useRef<HTMLInputElement>(null);
  const navigate =useNavigate();
  const checkLogin = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
 if(!Id.current || !Pwd.current){
   return;
 }
    const checkId = IdCheck(Id.current.value);
    const checkPw = PwCheck(Pwd.current.value);

    if (!checkId || !checkPw) {
      alert("아이디 또는 비밀번호 형식이 틀립니다.");
    } else {
      console.log("API 통신 보내기");
      // 로그인 API 보내기
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height:"500px",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <div style={{ width: "200px", margin: "50px auto" }}>
        <img src={example_log} alt="로고" width="200px"></img>
      </div>
      <form
        onSubmit={checkLogin}
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <input
            type="text"
            id="id"
            ref={Id}
            placeholder="ID"
            style={{ display: "block", margin: "0px 0px 5px 0px" }}
          ></input>
          <input
            type="text"
            id="pwd"
            ref={Pwd}
            placeholder="PW"
            style={{ display: "block" }}
          ></input>
        </div>
        <div style={{ margin: "0 0 0 5px" }}>
          <button
            type="submit"
            style={{
              padding: "15px",
              border: "none",
              color: "white",
              background: "#FF4465",
            }}
          >
            로그인
          </button>
        </div>
      </form>
      <div onClick={()=>navigate('/signup')} >회원가입</div>
    </div>
  );
};

export default Login;
