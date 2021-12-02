import React from "react";
import styled from "styled-components";

const  Button = (props) => {

    const {text, _onClick, is_float, children, margin, width, padding} = props;
  if(is_float){
    return( <React.Fragment>
             <FloatButton onClick={_onClick}>{text? text: children}</FloatButton>
          </React.Fragment>
    )
             }

    const styles ={
      margin:margin,
      width:width,
      padding: padding,
    }
             
    return (
      <React.Fragment>
        <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
      </React.Fragment>
    );
}

Button.defaultProps = {
    text: false,
    _onClick: () => {},
    is_float: false, 
    children:null,
    margin: false,
    width: '100%',
    padding: "12px 0px"
}

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color: #212121;
    color: #ffffff;
    padding: ${(props)=> props.padding};
    box-sizing: border-box;
    border: none;
    ${(props)=>(props.margin? `margin: ${props.margin}`: '')}
`;

const FloatButton = styled.button`
  width: 50px;
  height : 50px;
  background-color: #212121;
  color: #ffffff;
  /* padding: 16px; */    // padding 안빼면 아래 text-align과 vertical-align 위치가 가운데로 안온다
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800px;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border:none;
  border-radius: 50px;
`;

export default Button;