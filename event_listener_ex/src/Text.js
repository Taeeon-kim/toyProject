import React from "react";

const Text = (props) => {
const text = React.useRef(null);

const hoverEvent = () => {
    console.log(text.current);
     text.current.style.background = "yellow"  //앞서 클래스 컴포넌트 부분처럼 이부분은 위에 text에 useRef 를 넣어준 요소 부분을 target이 되고 그곳에서 실행되게 한다. 함수 컴포넌트에서는 return 부분에 있는 h1부분에 실행된다

    }

React.useEffect(() => {   //useEffect는 리액트 hook 중에하나다. 처음 랜더링할때 무조건 한번 () => 부분이 실행되고(Didmount와 같은 동작), 두번째랜더링(리랜더링)때는 화살표함수를 무조건 실행하는게 아니라 [] 부분에 들어가있는 요소를 
                                //확인하고 바뀐게 있는지 보고 바뀐게 있으면 화살표함수를 실행한다(DidUpdate와 같은 동작). 만약 아무것도 바뀐게 ∂없거나 dependency array부분이 비어있다면 화살표함수는 실행되지 않는다(DidMount와 같은동작)
 text.current.addEventListener("mouseover",hoverEvent)      //이벤트리스너함수를 쓸수있는곳은 didMount 와 같은 기능을 하는곳에 넣어주면 된다.
return () => {text.current.removeEventListener("mouseover",hoverEvent) }// componentWillUnmount 때 동작하는 부분이 여기다. 이때 return 다음 () => 을 쓰는 문법을 잘알아둘것 그냥 Return하면 제대로 작동안한다

}, []);    //[] 부분을 dependency array 라고 하고 의존성 배열이라고 한다. 
return (                        // return 부분이 clean up 부분이다. 
<h1 ref={text}>텍스트입니다!</h1>    
)
}

export default Text;