import React from "react";
import { Text, Input, Grid, Button } from "../elements";
// import {getCookie,setCookie,deleteCookie} from "../shared/Cookie"
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from '../redux/modules/user'
import { emailCheck } from "../shared/common";


const Login = (props) => {

  const dispatch=useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const login = () =>{    // 나중에 매개변수로 id,와 pwd 넘겨주면될거같다.

    console.log(id);

    // aa_-.123Aaa@aa.com
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;   // ()붙이고 뒤에 *을 붙이면 n번째 반복할수있다는걸 나타냄
    console.log(_reg.test(id))
   

    if(id === "" || pwd===""){
      window.alert("아이디 혹은 비밀번호를 생략하셨습니다.")
      return;
   }
   if(!emailCheck(id)){
     window.alert("이메일형식이 맞지않습니다.");
   }
   
   
    dispatch(userActions.loginFB(id,pwd));

    // setCookie("user_id", "perl", 3);  //이부분을 id에 넘겨받은 값
    // setCookie("user_pwd", "pppp", 3);  // 이부분은 pwd 로 넘겨받은 값을 넣을거 구상해보자
    


  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
          label="아이디"
            _onChange={(e) => {
             
            setId(e.target.value)
            }}
            
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            type = "password"
            _onChange={(e) => {
              
              setPwd(e.target.value)
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
            login();  // 나중에 매개변수로 id,와 pwd 넘겨주면될거같다.
            // deleteCookie("user_id", "user_pwd");   // 아이디와 비번 쿠키값 삭제
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
