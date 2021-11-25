import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createBucket, updateBucket } from './redux/module/bucket';
import {useHistory, useParams} from 'react-router-dom'
import { loadBucketFB,addBucketFB } from './redux/module/bucket';


const UpdatePage = (props) => {

    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state)=> state.bucket.list)

    console.log(params)
    console.log(bucket_index)
    console.log(bucket_list)
    const history = useHistory();
    const dispatch = useDispatch();
    const text1 = React.useRef(null);
    const text2 = React.useRef(null);
    const text3 = React.useRef(null);
    
    // React.useEffect(()=>{
    //   // console.log(db)
    //   dispatch(loadBucketFB());
      
    
    // },[]);
    
    const addBucketList = () => {
      
        // dispatch(addBucketFB({text: text.current.value, completed :false}));
        // dispatch(createBucket(
        //     {   name: text1.current.value, 
        //         desc :text2.current.value, 
        //         ex : text3.current.value}));
        dispatch(addBucketFB({ 
            name: text1.current.value, 
            desc :text2.current.value, 
            ex : text3.current.value}))
       
        // console.log(dispatch(createBucket(text1.current.value)))
        // setList([...list, text.current.value]);
        }
    const Clean = () => {
        text1.current.value = "";
        text2.current.value = "";
        text3.current.value = "";
    }

    return (<Adding>
        <Seperation>
         <NameTag htmlFor="word">단어</NameTag>
        <Input placeholder="원하는 단어를 입력해주세요." type="text" id="word" ref={text1} />
        </Seperation>
        <Seperation>
        <NameTag htmlFor="description">설명</NameTag>
         <Input placeholder="단어가 무슨 뜻인지 설명해주세요" type="text" id="description" ref={text2}/>
         </Seperation>
         <Seperation>
         <NameTag htmlFor="example">예시</NameTag>
         <Input placeholder="무슨 예문이 있을까요?" type="text" id="example" ref={text3}/>
         </Seperation>
         {/* <ButtonStyle onClick={() =>{addBucketList(); alert("등록되었습니다."); Clean()} } >추가하기</ButtonStyle> */}
         {/* <ButtonStyle onClick={() =>{ 
             dispatch(updateBucketFB(bucket_list))
             history.push("/")} } >수정하기</ButtonStyle> */}
    </Adding>
    
    );
}

const Adding = styled.div`
  display: flex;
  flex-direction: column;
  margin:auto;
  padding: auto;
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
     padding: 10px;
     background:#e2fef8;
`;

const Input = styled.input`
    margin-top: 30px;
    margin:auto;
    position: relative;
    left:5px;
     background: white;
     width: 100%;
     height: 40px;
     max-width: 300px;
     border-radius: 5px;
     
`;

const NameTag = styled.label`
/* margin-bottom: 5px; */
/* position: absolute; */
margin:auto;
left : 50px;
font-weight: bold;
color: purple;
`;

const ButtonStyle = styled.button`
    background: purple;
    color: white;
    font-weight: bold;
    border:purple;
    height: 30px;
    width: 200px;
    margin:auto;
    border-radius: 5px;
    &:hover{box-shadow: 5px 5px 5px #742b2b }
`;

export default UpdatePage;