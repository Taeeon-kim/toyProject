
// import './App.css';
import React from 'react';
// import "./App.css";
import BucketList from './BucketList';
// import {BucketList} from './BucketList';   // ./는 지금 내가 있는 경로 이고 ../ 를 쓰면 위로 올라감 두개위로 올라가고싶으면 ../../ 하면됨

import "./style.css";
import styled from "styled-components"

class App extends React.Component{      //부모 React의 Component를 상속가져옴
constructor(props){                         // 클래스이므로 초기화해줄 초기화함수 constructor 를 생성
  super(props);

  this.state ={                               // 내 컴포넌트가 가지고있는 데이터, App 클래스에 state 라는 데이터를 넣어줌
     list : ["영화관 가기", "매일 책읽기", "수영 배우기"],

  }
}

render(){    //랜더는 필수적으로 있어야함
  console.log(this.state.list);
  return(
    <div className = "App">
      <MyStyled Bg_color={"red"}/>

      {/* <div className="container">
        <h1>내 버킷리스트 </h1>
        <hr class ="line"/>
        <BucketList list={this.state.list} />  어떤 이름으로 넘겨줄지 적어주고 해당하는 데이터를 넣어줌, 이때 BucketList.js로 넘거가기때문에 매개변수 props에 들어간다
      </div> */}
    </div>
  );
}

}

const MyStyled = styled.div`
  width : 50vw;
  height: 150px;
  background: purple;
  background-color: ${(props) => (props.Bg_color)};
`;
//   );
 
// function App() {  // 함수형 컴포넌트
//   return (
//     <div className="App">
//       <BucketList />      {/*자식 컴포넌트를 불러옴*/}
//     </div>
// }

export default App;
