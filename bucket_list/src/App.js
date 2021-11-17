// import './App.css';
import React from "react";
// import "./App.css";
import BucketList from "./BucketList";
// import {BucketList} from './BucketList';   // ./는 지금 내가 있는 경로 이고 ../ 를 쓰면 위로 올라감 두개위로 올라가고싶으면 ../../ 하면됨

import styled from "styled-components";

class App extends React.Component {
  //부모 React의 Component를 상속가져옴
  constructor(props) {
    // 클래스이므로 초기화해줄 초기화함수 constructor 를 생성
    super(props);

    this.state = {
      // 내 컴포넌트가 가지고있는 데이터, App 클래스에 state 라는 데이터를 넣어줌
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
    this.text = React.createRef();
  }
  componentDidMount() {
    console.log(this.text);
    console.log(this.text.current.value);
  }
  componentDidUpdate() {
    console.log("업데이트 될때 뜸");
  }

  addingInput = () => {
    // this.state.list.push(this.text.current.value)
    const newItem = this.text.current.value;
    this.setState({ list: [...this.state.list, newItem] });
    console.log("클릭");
    console.log(this.state.list);
  };

  render() {
    //랜더는 필수적으로 있어야함
    console.log(this.state.list);
    return (
      <AppWrap className="App">
        <Container className="container">
          <Title>내 버킷리스트 </Title>
          {/* <hr class ="line"/> */}
          <Line />
          <BucketList list={this.state.list} />{" "}
          {/*어떤 이름으로 넘겨줄지 적어주고 해당하는 데이터를 넣어줌, 이때 BucketList.js로 넘거가기때문에 매개변수 props에 들어간다*/}
        </Container>
        <AddInput>
          <input type="text" ref={this.text} />
          <button onClick={() => this.addingInput()}>추가하기</button>
        </AddInput>
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh; /*vh 는 화면 비율, 즉 화면의 100프로만큼 height을 넣어줌*/
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 50vw;
  background-color: #fff;
  max-width: 350px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
`;

const AddInput = styled.div`
  width: 50vw;
  background-color: #fff;
  max-width: 350px;
  margin: auto;
  height: 50px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

// const MyStyled = styled.div`
//   width : 50vw;
//   height: 150px;
//   background: purple;
//   background-color: ${(props) => (props.Bg_color)};
//   p {
//     color : white;
//   }
//   &:hover{
//     background-color : yellow;   //Styled 컴포넌트 안에서쓰는 scss 문법 &은 자기자신을 나타냄 그리고 &: hover 라는건 자기자신에게 hover(마우스올림)이 발생하면 실행됨
//   }
// `;

// );

// function App() {  // 함수형 컴포넌트
//   return (
//     <div className="App">
//       <BucketList />      {/*자식 컴포넌트를 불러옴*/}
//     </div>
//     )
// }

export default App;
