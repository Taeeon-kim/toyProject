import React from "react";
import {useHistory} from "react-router-dom";
const Home = (props) => {
    const history = useHistory()
    return (<div onClick={() => {
        history.push("/home");
    }}>메인 화면입니다</div>);
}

export default Home;