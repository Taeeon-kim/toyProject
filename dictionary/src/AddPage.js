import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createBucket } from './redux/module/bucket';
import {useHistory} from 'react-router-dom'


const AddPage = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const text1 = React.useRef(null);
    const text2 = React.useRef(null);
    const text3 = React.useRef(null);

    
    const addBucketList = () => {
        // 스프레드 문법! 기억하고 계신가요? :) 
        // 원본 배열 list에 새로운 요소를 추가해주었습니다.
        // dispatch(addBucketFB({text: text.current.value, completed :false}));
        dispatch(createBucket({name: text1.current.value, desc :text2.current.value, ex : text3.current.value}));
       
        // console.log(dispatch(createBucket(text1.current.value)))
        // setList([...list, text.current.value]);
        }

    return (<Adding>
        <Seperation>
         <NameTag for="word">단어</NameTag>
        <Input type="text" id="word" ref={text1} />
        </Seperation>
        <Seperation>
        <NameTag for="description">설명</NameTag>
         <Input type="text" id="description" ref={text2}/>
         </Seperation>
         <Seperation>
         <NameTag for="example">예시</NameTag>
         <Input type="text" id="example" ref={text3}/>
         </Seperation>
         <button onClick={() =>{addBucketList(); history.push("/") } } >추가하기</button>
    </Adding>
    
    );
}

const Adding = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width:50%;
  gap: 20px;
`;
const Seperation = styled.div`

    display: flex;
    flex-direction: column;
     background: white;
     /* width: 100%; */
    align-items: center;
     max-width: 350px;

`;

const Input = styled.input`
    margin-top: 30px;
     background: white;
     width: 100%;
     height: 40px;
     max-width: 300px;
     
`;

const NameTag = styled.label`
/* margin-bottom: 5px; */
position: absolute;
left : 20px;
`;

export default AddPage;