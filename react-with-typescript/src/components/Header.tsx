import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import header_profile from '../static/image/header_profile.svg'

const Header:React.FC = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        height: "58px",
        width: "100%",
        background: "#E22F2F",
        top: "0px",
        left: "0px",
        justifyContent: "space-between",
        zIndex: "5",
        color: "white",
        fontSize: "25px",
        alignItems:"center",
        padding:"0px 7px",
        boxSizing:"border-box"
      }}
    >
      <Box onClick={()=> navigate('/')}>Awesome Place</Box>
      <div>logo</div>
      <div style={{display:"flex", alignItems:"center"}}>
      <Box onClick={()=> navigate('/signin')}>로그인</Box>
      <Box onClick={()=> navigate('/mypage')}>마이페이지</Box>
      <img src={header_profile} alt="profile"></img>
      </div>
    </div>
  );
};

const Box = styled.div`
  margin: 0px 5px;
  &:hover{
    cursor:pointer ;
  }
`;

export default Header;
