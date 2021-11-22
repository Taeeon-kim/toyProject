import React from "react";

import styled from "styled-components";
import { useHistory } from "react-router";
import {c} from "./index"
import b from "./index"
const Review = (props) => {
    const history = useHistory();
    console.log(props);
    let buttons;
     console.log(c, b)
    const clickEvent = (index) => {
        for(let i=0; i<buttons.length;i++ )
        {buttons[i].style.background = "gray" }
       for(let j=0; j<=index;j++)
       {buttons[j].style.background = "green" } 
       //앞서 클래스 컴포넌트 부분처럼 이부분은 위에 text에 useRef 를 넣어준 요소 부분을 target이 되고 그곳에서 실행되게 한다. 함수 컴포넌트에서는 return 부분에 있는 h1부분에 실행된다
       }
    React.useEffect(() => {   //useEffect는 리액트 hook 중에하나다. 처음 랜더링할때 무조건 한번 () => 부분이 실행되고(Didmount와 같은 동작), 두번째랜더링(리랜더링)때는 화살표함수를 무조건 실행하는게 아니라 [] 부분에 들어가있는 요소를 
        buttons = document.getElementsByClassName("buttn");  
          
                         //확인하고 바뀐게 있는지 보고 바뀐게 있으면 화살표함수를 실행한다(DidUpdate와 같은 동작). 만약 아무것도 바뀐게 ∂없거나 dependency array부분이 비어있다면 화살표함수는 실행되지 않는다(DidMount와 같은동작)
// buttons[0].addEventListener("click",clickEvent)      //이벤트리스너함수를 쓸수있는곳은 didMount 와 같은 기능을 하는곳에 넣어주면 된다.
return () => {buttons = document.getElementsByClassName("buttn"); }// componentWillUnmount 때 동작하는 부분이 여기다. 이때 return 다음 () => 을 쓰는 문법을 잘알아둘것 그냥 Return하면 제대로 작동안한다
   }, []); 

    return (<Wrap>
        <div style={{fontWeight :"bold"}}><span style={{backgroundColor:"orange", color:"white", borderRadius:"3px"}}>{props.name}</span> 평점 남기기</div>
        <Center>
            <Circle className="buttn" onClick={()=>{clickEvent(0)}}/>
            <Circle className="buttn" onClick={()=>{clickEvent(1)}}/>
            <Circle className="buttn" onClick={()=>{clickEvent(2)}}/>
            <Circle className="buttn" onClick={()=>{clickEvent(3)}}/>
            <Circle className="buttn" onClick={()=>{clickEvent(4)}}/>
            
        </Center>
        <button onClick={ () => {
           history.push("/")}} 
           style={{backgroundColor:"purple", color : "white", border : "1px solid purple", padding:"10px", width:"200px"}}>평점 남기기</button>
        </Wrap>
    );
}

const Wrap = styled.div`
max-width: 350px;
width: 80vw;
height: 90vh;
margin: 5vh auto;padding: 5vh 0px;
border: 1px solid rgb(221, 221, 221);
box-sizing: border-box;
border-radius: 5px;
`;

const Center = styled.div`
    display:flex;
    justify-content: center;
    margin: 10px;
`;

const Circle = styled.div`
     margin:2px;
     width: 25px ;
     height: 25px ;
     background: #dddd ;
     border-radius:25px;
`;



export default Review;