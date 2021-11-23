import React from "react";
import styled from "styled-components"
import {Eco} from "@material-ui/icons" //Eco 는 나뭇잎 모양 아이콘이다.

const Spinner = (props) => {
    return (
        <Outter> <Eco style ={{
            color : "#673ab7", fontSize : "150px"
        }}></Eco> </Outter>

    );
}

const Outter = styled.div`
    background: #e5d6ff;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top :0;
    left:0;
    display : flex;
    align-items: center; // 세로 센터로 주는것 
    justify-content: center; //가로 센터로 주는것

`;


export default Spinner;