// 리액트 패키지를 불러옵니다.
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const BucketList = (props) => {
const history = useHistory();
const my_lists = props.list;

return (
<ListStyle>
{my_lists.map((list, index) => {
return (
    
<ItemStyle className="list_item" key={index} onClick={() => {
    history.push("/detail")
}}>

{list}

</ItemStyle>

);
})}
</ListStyle>
);
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
`;

export default BucketList;