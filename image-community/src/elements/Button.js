import React from "react";
import styled from "styled-components";

const  Button = (props) => {

    const {text, _onClick, is_float, children} = props;
  if(is_float){
    return( <React.Fragment>
             <FloatButton onClick={_onClick}>{text? text: children}</FloatButton>
          </React.Fragment>
    )
             }
    return (
      <React.Fragment>
        <ElButton onClick={_onClick}>{text? text: children}</ElButton>
      </React.Fragment>
    );
}

Button.defaultProps = {
    text: false,
    _onClick: () => {},
    is_float: false, 
    children:null,
}

const ElButton = styled.button`
    width: 100%;
    background-color: #212121;
    color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    
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