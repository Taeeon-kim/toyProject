import './index'
import './App.css';
import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom';
import Review from './Review';
import { useHistory } from "react-router";

function App() {

  const history = useHistory();
let [name, setName] = React.useState("");
let [count, setNum] = React.useState(null);
let buttons;
console.log(count)
console.log(history)

function RandomStar() {
  setNum(count = Math.floor(Math.random()*6))
  for(let j=0; j<count;j++)
   {buttons[j].style.background = "green" } 
}


React.useEffect(() => {   //useEffect는 리액트 hook 중에하나다. 처음 랜더링할때 무조건 한번 () => 부분이 실행되고(Didmount와 같은 동작), 두번째랜더링(리랜더링)때는 화살표함수를 무조건 실행하는게 아니라 [] 부분에 들어가있는 요소를 
  
    for(let i=1; i<8;i++ )
    {buttons = document.getElementsByClassName(`buttn${i}`);
      RandomStar();         }
  //    
  // 
   //앞서 클래스 컴포넌트 부분처럼 이부분은 위에 text에 useRef 를 넣어준 요소 부분을 target이 되고 그곳에서 실행되게 한다. 함수 컴포넌트에서는 return 부분에 있는 h1부분에 실행된다
   
                   //확인하고 바뀐게 있는지 보고 바뀐게 있으면 화살표함수를 실행한다(DidUpdate와 같은 동작). 만약 아무것도 바뀐게 ∂없거나 dependency array부분이 비어있다면 화살표함수는 실행되지 않는다(DidMount와 같은동작)
// buttons[0].addEventListener("click",clickEvent)      //이벤트리스너함수를 쓸수있는곳은 didMount 와 같은 기능을 하는곳에 넣어주면 된다.
return () => {buttons = document.getElementsByClassName; }// componentWillUnmount 때 동작하는 부분이 여기다. 이때 return 다음 () => 을 쓰는 문법을 잘알아둘것 그냥 Return하면 제대로 작동안한다
}, []); 

  return (
    <div className="App">
      
    
      <Route path="/" exact>
      <Wrap><div style={{fontWeight : "bold"}}>내 일주일은?</div>
        <Center><Font>일</Font>
            <Circle className="buttn1"/>
            <Circle className="buttn1"/>
            <Circle className="buttn1"/>
            <Circle className="buttn1"/>
            <Circle className="buttn1"/>
            <Triangle onClick={()=>{
                 history.push("/review/일");
                 setName(name="일요일");
             }} />
        </Center>
        <Center><Font>월</Font>
            <Circle className="buttn2"/>
            <Circle className="buttn2"/>
            <Circle className="buttn2"/>
            <Circle className="buttn2"/>
            <Circle className="buttn2"/>
            <Triangle onClick={()=>{
                 history.push("/review/월");
                 setName(name="월요일");
             }}/>
        </Center>
        <Center><Font>화</Font>
            <Circle className="buttn3"/>
            <Circle className="buttn3"/>
            <Circle className="buttn3"/>
            <Circle className="buttn3"/>
            <Circle className="buttn3"/>
            <Triangle onClick={()=>{
                 history.push("/review/화");
                 setName(name="화요일");
             }} />
        </Center>
        <Center><Font>수</Font>
            <Circle className="buttn4"/>
            <Circle className="buttn4"/>
            <Circle className="buttn4"/>
            <Circle className="buttn4"/>
            <Circle className="buttn4"/>
            <Triangle onClick={()=>{
                 history.push("/review/수");
                 setName(name="수요일");
             }} />
            </Center>
        <Center><Font>목</Font>
            <Circle className="buttn5"/>
            <Circle className="buttn5"/>
            <Circle className="buttn5"/>
            <Circle className="buttn5"/>
            <Circle className="buttn5"/>
            <Triangle onClick={()=>{
                 history.push("/review/목");
                 setName(name="목요일");
             }} />
        </Center>
        <Center><Font>금</Font>
            <Circle className="buttn6"/>
            <Circle className="buttn6"/>
            <Circle className="buttn6"/>
            <Circle className="buttn6"/>
            <Circle className="buttn6"/>
            <Triangle onClick={()=>{
                 history.push("/review/금");
                 setName(name="금요일");
             }} />
        </Center>
        <Center><Font>토</Font>
            <Circle className="buttn7"/>
            <Circle className="buttn7"/>
            <Circle className="buttn7"/>
            <Circle className="buttn7"/>
            <Circle className="buttn7"/>
            <Triangle onClick={()=>{
                 history.push("/review/토");
                 setName(name="토요일");
             }} />
        </Center>
      
      </Wrap>
      </Route>
   
      <Route path="/review" >
        <Review name={name}/>
      </Route>
    </div>
  
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
    margin: 10px auto;
`;

const Circle = styled.div`
     margin:2px;
     width: 25px ;
     height: 25px ;
     background: #dddd  ;
     border-radius:25px;
`;

const Triangle = styled.div`
  width: 0px;height: 0px;
  border-top:14px solid transparent;
  border-bottom:14px solid transparent;
  border-left: 20px solid  purple;
  cursor: pointer;
`;

const Font = styled.span`
  margin-right: 5px;
  padding: 4px;
  font-weight: bold;
`;
export default App;
