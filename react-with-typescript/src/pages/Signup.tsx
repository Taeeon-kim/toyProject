import React, { useState, useRef } from "react";
import { IdCheck, PwCheck, NicknameCheck } from "../shared/regex";

const Signup: React.FC = (props) => {
  const [Id, setId] = useState();
  const [Pwd, setPwd] = useState();
  const [PwdCheck, setPwdCheck] = useState();
  const [nickName, setNickName] = useState();

  const [IdMessage, setIdMessage] = useState<string>();
  const [PwMessage, setPwMessage] = useState<string>();
  const [NickMessage, setNickMessage] = useState<string>();
  const [PwCheckMessage, setPwdChekMessage] = useState<string>();

  const [IdMessageColor, setIdMessageColor] = useState<boolean>();
  const [PwMessageColor, setPwMessageColor] = useState<boolean>();
  const [NickMessageColor, setNickMessageColor] = useState<boolean>();
  const [PwCheckMessageColor, setPwdChekMessageColor] = useState<boolean>();
  const signUp = (event: any) => {
    event.preventDefault();
    const info = {
      id: Id,
      pw: Pwd,
      nickname: nickName,
    };
    console.log(info);

    if (
      IdMessageColor &&
      PwMessageColor &&
      NickMessageColor &&
      PwCheckMessageColor
    ) {
      console.log("요청모두 맞아서 api 호출");
      // API 호출
      // dispatch(SignUpDB(info));
    }
  };
  const idCheck = (event: any) => {
    const current_id = event.target.value;
    setId(current_id);
    if (!IdCheck(current_id)) {
      setIdMessageColor(false);
      setIdMessage("1~15자리 영대소문자,숫자 사용가능");
    } else {
      setIdMessageColor(true);
      setIdMessage("규칙에 맞게 입력");
    }
  };
  const pwCheck = (event:any) => {
    const current_pw = event.target.value;
    setPwd(current_pw);
    console.log(PwCheck(current_pw));
    if (!PwCheck(current_pw)) {
      setPwMessageColor(false);
      setPwMessage("8~15자리 영대문자+숫자 조합으로 입력해주세요");
    } else {
      setPwMessageColor(true);
      setPwMessage("안전한 비밀번호");
    }
  };
  const pwDoubleCheck = (event : any) => {
    const current_pwCheck = event.target.value;
    setPwdCheck(current_pwCheck);
    if (current_pwCheck === Pwd) {
      setPwdChekMessageColor(true);
      setPwdChekMessage("일치합니다.");
    } else {
      setPwdChekMessageColor(false);
      setPwdChekMessage("불일치");
    }
  };

  const nickNameCheck = (event : any) => {
    const current_nickname = event.target.value;
    setNickName(current_nickname);
    if (!NicknameCheck(current_nickname)) {
      setNickMessageColor(false);
      setNickMessage("영대소문자,숫자,한글 사용");
    } else {
      setNickMessageColor(true);
      setNickMessage("사용가능한 닉네임입니다.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        // height: "500px",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <form onSubmit={signUp}>
        <div className="IdInput">
          <label htmlFor="Id">아이디 입력(영문/숫자)</label>
          <br />
          <input type="text" id="Id" onChange={idCheck}></input>
          <div style={{ color: IdMessageColor ? "green" : "red" }}>
            {IdMessage}
          </div>
        </div>
        <div className="nickName">
          <label htmlFor="nickname">닉네임</label>
          <br />
          <input type="text" id="nickname" onChange={nickNameCheck}></input>
          <div style={{ color: NickMessageColor ? "green" : "red" }}>
            {NickMessage}
          </div>
        </div>
        <div className="PwdInput">
          <label htmlFor="Pwd">비밀번호 입력</label>
          <br />
          <input type="password" id="Pwd" onChange={pwCheck}></input>
          <div style={{ color: PwMessageColor ? "green" : "red" }}>
            {PwMessage}
          </div>
        </div>
        <div className="PwdCheckInput">
          <label htmlFor="PwdCheck">비밀번호 확인</label>
          <br />
          <input type="password" id="PwdCheck" onChange={pwDoubleCheck}></input>
          <div style={{ color: PwCheckMessageColor ? "green" : "red" }}>
            {PwCheckMessage}
          </div>
        </div>
        <button>확인</button>
      </form>
    </div>
  );
};

export default Signup;
