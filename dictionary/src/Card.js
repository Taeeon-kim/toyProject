import React from 'react';
// import { useHistory } from 'react-router';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useHistory } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBucketFB } from './redux/module/bucket';


const Card = (props) => {
    
     const history = useHistory(); 
    const memo_list = useSelector((state) => state.bucket.list); //리덕스 스토어에서 list 값 가져옴
    const dispatch  = useDispatch();

    return (
        <BookStyle>
            {memo_list.map((memo,index) => {
                return (<MemoContainer key={memo.id} >       {/*여기에 key값을 안주면 에러는 아니고 warning 이 계속뜬다*/}
                   <EditIcon style={{position: "relative", left : "80px"}} onClick={() =>{history.push("/update/"+index)} }>수정하기</EditIcon>
                   <DeleteIcon  style={{position: "relative", left : "90px"}} onClick={() =>{ dispatch(deleteBucketFB(memo.id)) ;   }} ></DeleteIcon>
                        <Word>단어</Word>
                        {memo.name}
                        <Word>설명</Word>
                        {memo.desc}
                        <Word>예시</Word>
                        <span style={{color : "#78b6ff"}}>{memo.ex}</span>
                    
                    </MemoContainer>
                    )
            })}
        
             <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </BookStyle>
        
    );
}

const BookStyle = styled.div`
width: 100%;
    display: flex;
    flex-wrap: wrap;  //이게 있으면 화면 사이즈에 맞게 플렉스하게 줄바꿈해주고 그다음 내용물써줌
    /* flex-direction: column; */
    gap: 20px; // 각각의 메모사이에 갭을 준다.
    /* flex-direction: column; */
   /* padding: 0p; */
   
 
`;

const MemoContainer = styled.div`
    /* position: relative; */
    min-width: 250px;
    padding: 10px;
    width: 30%;
    border: 1px solid rgb(19,106,1);
    border-radius: 10px;
    background: rgb(255,255,255);
    &:hover { box-shadow: 10px 10px 10px #ddd}
   
`;

const Word = styled.p`
    display: block;
    font-weight: bold;
    font-size: 25px;
    color: #f58484;
    /* border: 1px solid #fff; */
    box-sizing: border-box; 
    margin: 5px;
    text-decoration: underline;
`;

const MenuDot = styled(MoreVertIcon)`
border-radius: 10px;
position: relative; //나중에 수정해야한다
left: 150px;
    &:hover{ background-color : #dddddd};
`;

export default Card;