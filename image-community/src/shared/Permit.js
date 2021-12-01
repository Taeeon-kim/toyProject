import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";
import {Grid, Text, Button} from "../elements";
import {history} from "../redux/configureStore"
const Permit = (props) =>{
    const is_login = useSelector((state)=> state.user.is_login);
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`; 
    const is_session = sessionStorage.getItem(_session_key)? true : false;
    if(is_session && is_login){
        
    return <React.Fragment>{props.children}</React.Fragment>
    }

    return null
//     return(<React.Fragment>
//     <Grid is_flex padding="4px 16px">
//         <Grid>
//             <Text margin="0px" size="24px" bold>헬로</Text>
//         </Grid>
        
//         <Grid is_flex>
//             <Button text="로그인" _onClick={()=> history.push('/login')}></Button>
//             <Button text="회원가입" _onClick={()=> history.push('/signup')}></Button>
//         </Grid>
//     </Grid>
// </React.Fragment>);
   
}

export default Permit;