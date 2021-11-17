import React from "react";
import {useHistory} from "react-router-dom"


const Dog = (props) => {
    console.log(props); 
    const history = useHistory();
    return (<div onClick={()=> {
        history.push("/home")   //push 는 페이지이동이다
    }}>강아지 화면입니다</div>);
}

export default Dog;