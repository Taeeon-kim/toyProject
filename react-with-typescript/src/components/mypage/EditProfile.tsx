import React, { useState } from "react";
import styled from "styled-components";
import { IdCheck, PwCheck, NicknameCheck } from "../../shared/regex";

import edit_button from "../../static/image/edit_button.svg";
import edit_enter from "../../static/image/edit_enter.svg";
import edit_cancel from "../../static/image/edit_cancel.svg";


const Editprofile : React.FC = (props) => {
  
  const [Pwd, setPwd] = useState<string>();
  // const [PwdCheck, setPwdCheck] = useState();
  const [nickName, setNickName] = useState<string>("초기닉네임");
  const [changingNickName, setChangingNickName] = useState<string>(nickName);

  const [PwMessage, setPwMessage] = useState<string>();
  const [NickMessage, setNickMessage] = useState<string>();
  const [PwCheckMessage, setPwdChekMessage] = useState<string>();

  const [PwMessageColor, setPwMessageColor] = useState<boolean>();
  const [NickMessageColor, setNickMessageColor] = useState<boolean>();
  const [PwCheckMessageColor, setPwdChekMessageColor] = useState<boolean>();

  const [isEdit, setIsEdit] = useState(false);

  //나중에 useSelector 로 내정보 관련정보 가져오기
   //스피너 처리 나중에할것
  const edit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const info = {
      pw: Pwd,
      nickname: nickName,
    };
    console.log(info);

    if (PwMessageColor && NickMessageColor && PwCheckMessageColor) {
      console.log("요청모두 맞아서 api 호출");
      // API 호출
      // dispatch(SignUpDB(info)); // 닉네임, 비밀번호
      setIsEdit(!isEdit); // 버튼 true/false
      setNickName(changingNickName); // 실질적으로 내정보에서 보는 닉네임으로 최종 변경
    }
  };

  const pwCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    
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
  const pwDoubleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    const current_pwCheck = event.target.value;
    // setPwdCheck(current_pwCheck);
    if (current_pwCheck === Pwd) {
      setPwdChekMessageColor(true);
      setPwdChekMessage("일치합니다.");
    } else {
      setPwdChekMessageColor(false);
      setPwdChekMessage("불일치");
    }
  };

  const nickNameCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current_nickname = event.target.value;
    setChangingNickName(current_nickname);
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
        padding: "5px",
      }}
    >
      <Wrap>
        <div className="nickName">
          <label htmlFor="nickname">내 닉네임</label>
          <br />
          {isEdit ? (
            <>
              <input
                type="text"
                id="nickname"
                defaultValue={nickName}
                onChange={nickNameCheck}
              ></input>

              <div style={{ color: NickMessageColor ? "green" : "red" }}>
                {NickMessage}
              </div>
            </>
          ) : (
            <div
              style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}
            >
              {nickName}
            </div>
          )}
        </div>
        {isEdit ? (
          <>
            <div className="PwdInput">
              <label htmlFor="Pwd">비밀번호</label>
              <br />
              <input type="password" id="Pwd" onChange={pwCheck}></input>
              <div style={{ color: PwMessageColor ? "green" : "red" }}>
                {PwMessage}
              </div>
            </div>
            <div className="PwdCheckInput">
              <label htmlFor="PwdCheck">비밀번호 확인</label>
              <br />
              <input
                type="password"
                id="PwdCheck"
                onChange={pwDoubleCheck}
              ></input>
              <div style={{ color: PwCheckMessageColor ? "green" : "red" }}>
                {PwCheckMessage}
              </div>
            </div>
          </>
        ) : null}
        {isEdit ? (
          <div>
            <button
              onClick={edit}
              style={{ border: "none", background: "none" }}
            >
              <img src={edit_enter} alt="edit_enter" />
            </button>
            <button
              onClick={() => setIsEdit(!isEdit)}
              style={{ border: "none", background: "none" }}
            >
              <img src={edit_cancel} alt="edit" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEdit(!isEdit)}
            style={{ border: "none", background: "none" }}
          >
            <img src={edit_button} width="68px" height="31px" alt="edit" />
          </button>
        )}
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  & input {
    height: 25px;
    width: 150px;
    border: 1px solid #c1c1c1;
    background: #f0f0f0;
    border-radius: 22px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin: 5px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
  }
  & button {
    margin: 5px;
  }
`;

export default Editprofile;
