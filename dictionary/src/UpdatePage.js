import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {  updateBucketFB} from './redux/module/bucket';
import {useHistory, useParams} from 'react-router-dom'



const UpdatePage = (props) => {

    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state)=> state.bucket.list)
    // console.log(bucket_list[bucket_index].name)
    // const docRef = getDoc(collection(db, "dictionary"))
    const history = useHistory();
    const dispatch = useDispatch();
    const text1 = React.useRef(null);
    const text2 = React.useRef(null);
    const text3 = React.useRef(null);
    

   
    
    const updateBucket = (props) => {
      
     
        dispatch(updateBucketFB({ 
            name: text1.current.value, 
            desc :text2.current.value, 
            ex : text3.current.value,
            id : bucket_list[bucket_index].id,
            index : bucket_index}))
       
        }


    return (<Adding>
        <Seperation>
         <NameTag htmlFor="word">단어</NameTag>
        <Input placeholder="원하는 단어를 입력해주세요." type="text"  ref={text1} defaultValue={bucket_list[bucket_index].name} />
        </Seperation>
        <Seperation>
        <NameTag htmlFor="description">설명</NameTag>
         <Input placeholder="단어가 무슨 뜻인지 설명해주세요" type="text"  ref={text2}  defaultValue={bucket_list[bucket_index].desc} />
         </Seperation>
         <Seperation>
         <NameTag htmlFor="example">예시</NameTag>
         <Input placeholder="무슨 예문이 있을까요?" type="text"  ref={text3} defaultValue={bucket_list[bucket_index].ex} />
         </Seperation>
         {/* <ButtonStyle onClick={() =>{addBucketList(); alert("등록되었습니다."); Clean()} } >추가하기</ButtonStyle> */}
         <ButtonStyle onClick={() =>{ 
             updateBucket()
            history.push("/") } } >수정하기</ButtonStyle>
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