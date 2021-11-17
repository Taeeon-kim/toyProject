import React from "react";
import { useHistory } from "react-router";

const Detail = (props) => {
        const history = useHistory();
    return (<h1 onClick={() =>{
        history.push("/");

    }}> 상세 페이지입니다.</h1>

    )

}

export default Detail; 