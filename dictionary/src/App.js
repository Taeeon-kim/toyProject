import React from 'react';
import './App.css';
import styled from 'styled-components'
import {Route,useHistory} from 'react-router-dom'
import Card from './Card';
import AddPage from './AddPage';
import { useDispatch,useSelector} from 'react-redux';
import {loadBucketFB } from './redux/module/bucket'
import UpdatePage from './UpdatePage';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function App() {
const history = useHistory()
const dispatch = useDispatch()
const memo_list = useSelector((state) => state.bucket.list);


React.useEffect( async ()=>{
  
 await dispatch(loadBucketFB());
  
},[memo_list.length]);


  return (
    <div className="App">
      <Container>
      <Route path="/" exact>
      <Title>MY DICTIONARY</Title>
      <Card />
      {/* <AddButton onClick={() =>{history.push("/add")} }>추가</AddButton> */}
      <Icon style={{fontSize: "60px" }} onClick={() =>{history.push("/add")} }/>
      </Route>
      <Route path="/add">
      <Title>단어 추가하기</Title>
      <AddPage />
      </Route>
      <Route path = "/update/:index" >
      <Title>수정하기</Title>
      <UpdatePage />
      </Route>     
        </Container>
    </div>
  );
}
const Container = styled.div`

/* min-height: 60vh; */
background-color: #e2fef8;
padding: 16px;
width: 100vw;
/* min-width: 380px; */
/* margin: 0px 20px; */
height: 100%;
border-radius: 5px;
border: 1px solid #ddd;

`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;


const Icon = styled(AddCircleIcon)`
/* margin: 10px; */
padding: 0%;
color:green;
 border-radius: 30px;
position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  &:hover { box-shadow: 5px 5px 10px #742b2b;  }
`;


export default App;
