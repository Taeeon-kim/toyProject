import React from "react";
import {Grid, Text, Button} from "../elements";
import { getCookie, deleteCookie,setCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Header = (props) => {
    // const [is_login, setIsLogin] = React.useState(false); //초기 false 로 가져와서 로그인을 안했다라고 해줌
    const dispatch = useDispatch();
    const is_login =useSelector((state)=> state.user.is_login);
    const login = () =>{    // 나중에 매개변수로 id,와 pwd 넘겨주면될거같다.

    //     setCookie("user_id", "perl", 3);  //이부분을 id에 넘겨받은 값
    //     setCookie("user_pwd", "pppp", 3);  // 이부분은 pwd 로 넘겨받은 값을 넣을거 구상해보자
        
      }
    
    if(is_login){
        return(
            <React.Fragment>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>헬로</Text>
                    </Grid>
                    
                    <Grid is_flex>
                        <Button text="내정보"></Button>
                        <Button text="알림"></Button>
                        <Button text="로그아웃" _onClick={()=> {dispatch(userActions.logOut({}))}}></Button>
                    </Grid>
                </Grid>
            </React.Fragment>
            )
    }

    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>헬로</Text>
                </Grid>
                
                <Grid is_flex>
                    <Button text="로그인" _onClick={()=> login()}></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;