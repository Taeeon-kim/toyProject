import React from "react";
import { Text, Input, Grid, Button } from "../elements";
// import {getCookie,setCookie,deleteCookie} from "../shared/Cookie"
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from '../redux/modules/user'


const Login = (props) => {
  const dispatch=useDispatch();
  const login = () =>{    // 나중에 매개변수로 id,와 pwd 넘겨주면될거같다.

    dispatch(userActions.loginAction({user_name :'perl'}));

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
            _onChange={() => {
              console.log("아이디 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={() => {
              console.log("패스워드 입력했어!");
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
