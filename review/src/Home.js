import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Home = (props) => {
     const history = useHistory();
    
    
     React.useEffect(() => {   //useEffect는 리액트 hook 중에하나다. 처음 랜더링할때 무조건 한번 () => 부분이 실행되고(Didmount와 같은 동작), 두번째랜더링(리랜더링)때는 화살표함수를 무조건 실행하는게 아니라 [] 부분에 들어가있는 요소를 
          
                          //확인하고 바뀐게 있는지 보고 바뀐게 있으면 화살표함수를 실행한다(DidUpdate와 같은 동작). 만약 아무것도 바뀐게 ∂없거나 dependency array부분이 비어있다면 화살표함수는 실행되지 않는다(DidMount와 같은동작)
// buttons[0].addEventListener("click",clickEvent)      //이벤트리스너함수를 쓸수있는곳은 didMount 와 같은 기능을 하는곳에 넣어주면 된다.
return () => {}// componentWillUnmount 때 동작하는 부분이 여기다. 이때 return 다음 () => 을 쓰는 문법을 잘알아둘것 그냥 Return하면 제대로 작동안한다
    }, []);     


    return (
    <Wrap><div style={{}}>내 일주일은?</div>
        <Center>
       
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
            </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
      
      </Wrap>)

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
    margin-bottom: 10px;
`;

const Circle = styled.div`
     margin:2px;
     width: 25px ;
     height: 25px ;
     background: gray ;
     border-radius:25px;
`;

const Triangle = styled.div`
  width: 0px;height: 0px;
  border-top:14px solid transparent;
  border-bottom:14px solid transparent;
  border-left: 20px solid  purple;
  cursor: pointer;
`;


export default Home