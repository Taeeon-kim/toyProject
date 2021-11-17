import logo from './logo.svg';
import './App.css';
import React from "react";
import Text from "./Text";

class App extends React.Component{
constructor(props){
super(props);

this.state = {};
this.circle = React.createRef(null);
}

hoverEvent = (e) => {
  console.log(e.target);   // 이벤트가 발생했을때의 웹페이지에서 위치가 어느 DOM 의 어떤 엘리먼트인지 요소인지를 반환해준다.
  console.log(this.circle.current);
  this.circle.current.style.background = "yellow"
}

componentDidMount(){
console.log(this.circle); // render()부분에서 <div ~~ 부분에 ref로 참조 값이 들어가 있어서 didMount 에 마운트가 끝날때 보면 this.circle 은 그 참조를 넣어준 요소들이 outerHTML값으로 나온다(콘솔창에서 보면있음)
this.circle.current.addEventListener("mouseover", this.hoverEvent) // 처음 DidMount 가 완성되어 페이지가 완료되었을때 실행되는곳이기때문에 모든 값을 가지고 있다. 
//그래서 마지막에 this.circle.current에 addEventListener 을 걸어줘서 나중에 didMount로 들어올일은 없기때문에 나가기전에 설정을 해준것이다. 만약 circle.current 에 
//mouseover(가져다대면 이벤트발생)가 발생하면 this.hoverEvent 라는 함수를 실행해라 라는것이다
//컴포넌트가 사라질수도 있는데 다시 생겼는데 이벤트 리스너가 또 생긴다. 따라서 이벤트리스너를 등록했으면  지워야한다.

}

componentWillUnmount() {
 this.circle.current.removeEventListener("mouseover", this.hoverEvent) // 이벤트를 처음 생성한것처럼 똑같이 제거이벤트도 같은 매개변수와 형태를 쓴다
}

render() {
return (
<div style={{width: "100vw", height:"100vh", textAlign:"center"}}>
<Text/>
<div style={{margin:"auto", width: "250px", height: "250px", background:"green", borderRadius:"250px"}} ref={this.circle}></div>

</div>
);
}
}

export default App;