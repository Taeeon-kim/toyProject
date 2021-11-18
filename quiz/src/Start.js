import React from "react";
import img from "./lmg_01.png" 
const Start = (props) => {
    console.log(props)
    return (<div>
    <div style = {{            //인라인 스타일로 씀 
        display : "flex",
        flexDirection : "column",
        padding : "16px",
        boxSizing : "border-box",      //border 까지 다 사이즈를 포함하고 쓰기위해서
        height: "100vh",
        alignItems :"center",
        justifyContent : "center",

    }}>
       <img src = {img} style = {{
           width : "60vw",
            margin : "16px",

       }}/>
       <h1 style ={{
           fontSize :"1.5em",
           lineHeight : "1.5"

       }}>나는 <span style ={{
           backgroundColor : "#fef5d4" ,
           padding : "5px 10px",
           borderRadius : "30px",
       }}>{props.name}</span> 에 대해서 얼마나 알고있을까?</h1>
       <input style = {{
           border : "1px solid #dadafc",
           borderRadius :"30px",
           padding : "10px",
           width : "100%" ,


       }} />
       <button style ={{
           padding: "10px 36px",
           margin: "36px 0px",
           backgroundColor :"#dadafc",
           border : "#dadafc",
           borderRadius :"30px",

       }}>시작하기</button>
    </div></div>);
}

export default Start;