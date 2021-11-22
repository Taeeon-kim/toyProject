// 리액트 패키지를 불러옵니다.
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";

const BucketList = (props) => {
const history = useHistory();
const my_lists = useSelector((state)=>state.bucket.list );

console.log(my_lists) 


return (
<ListStyle>
{my_lists.map((list, index) => {
return (
    
<ItemStyle completed ={list.completed} className="list_item" key={index} onClick={() => {
    history.push("/detail/"+index)
}}>
 
{list.text}

</ItemStyle>

);
})}
</ListStyle>
);
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-x: hidden;
overflow-y: scroll;  // scroll로 해주고 자세히보면 웹브라우져에서 스크롤바 위치영역이 보인다.
max-height: 50vh;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
color: ${(props) => props.completed? "#fff" : "#333"};
background-color: ${(props)=>props.completed? "#a673ff" : "aliceblue"};
`;



export default BucketList;