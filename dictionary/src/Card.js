import React from 'react';
// import { useHistory } from 'react-router';
import styled from 'styled-components';
import {useSelector} from 'react-redux'
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import Box from '@mui/material/Box';
// import { green } from '@mui/material/colors';
// import Icon from '@mui/material/Icon';


const Card = (props) => {
    
    const memo_list = useSelector((state) => state.bucket.list); //리덕스 스토어에서 list 값 가져옴

    console.log(memo_list)
    
    
    return (
        <BookStyle>
            {memo_list.map((memo,index) => {
                return (<MemoContainer key={index}> {/*여기에 key값을 안주면 에러는 아니고 warning 이 계속뜬다*/}
                    <Word>단어</Word>
                    {memo.name}
                    <Word>설명</Word>
                    {memo.desc}
                    <Word>예시</Word>
                    <span style={{color : "#78b6ff"}}>{memo.ex}</span>
                    
                    </MemoContainer>
                    )
            })}
        {/* <Memo>테스트용 박스 체크하기위해 각 하나 메모장을 넣어줄것이다.</Memo>
        <Memo>테스트용 박스 체크하기위해 각 하나 메모장을 넣어줄것이다.</Memo>
        <Memo>테스트용 박스 체크하기위해 각 하나 메모장을 넣어줄것이다.</Memo> */}
        
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
`;


export default Card;