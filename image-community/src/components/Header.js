import React from "react";
import {Grid, Text, Button} from "../elements";
// import { getCookie, deleteCookie,setCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {history} from "../redux/configureStore"
import {apiKey} from "../shared/firebase"
import Permit from "../shared/Permit";

const Header = (props) => {
    // const [is_login, setIsLogin] = React.useState(false); //초기 false 로 가져와서 로그인을 안했다라고 해줌
    const dispatch = useDispatch();
    const is_login =useSelector((state)=> state.user.is_login);

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;    //뒤에 DEFUALT 부분을 잘붙여줘야 아래 getItem 할때 잘뜬다. 왜냐하면  검사페이지의 session storage안에 해당 key 값을 그대로 가져와야 인식하기떄문이다.
    const is_session = sessionStorage.getItem(_session_key)? true : false;
    // console.log(_session_key);
    // console.log(sessionStorage.getItem(_session_key)) //이정보는 검사페이지에서 application/ Session Storage에 가서 localhost:3000dmf snffjtj 해당Key와 value 가 있는곳을 누르면 같은 정보가있다.
    // console.log(is_session);
    if(is_login && is_session){
        return(
            <Permit>
            <Grid is_flex padding="4px 16px">
           <Grid>
               <Text margin="0px" size="24px" bold _onClick={()=> history.push("/")}>Outagram</Text>
           </Grid>
           
           <Grid is_flex>
               <Button text="내정보"></Button>
               <Button text="알림" _onClick={()=> history.push("/noti")}></Button>
               <Button text="로그아웃" _onClick={()=> {dispatch(userActions.logoutFB())}}></Button>
           </Grid>
       </Grid>
      
   </Permit>
            )
    }

          return (
            <React.Fragment>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>Outagram</Text>
                    </Grid>
                    
                    <Grid is_flex>
                        <Button text="로그인" _onClick={()=> history.push('/login')}></Button>
                        <Button text="회원가입" _onClick={()=> history.push('/signup')}></Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    
}

Header.defaultProps = {}

export default Header;